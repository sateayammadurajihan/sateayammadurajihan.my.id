package productmodel

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"

	"sateayammadurajihan.my.id/config"
	"sateayammadurajihan.my.id/entities"
	"sateayammadurajihan.my.id/models/categorymodel"
)

func GetAll() ([]entities.Product, error) {
	var products []entities.Product

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := config.MongoDatabase.Collection("products").Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var product entities.Product
		if err := cursor.Decode(&product); err != nil {
			continue
		}

		// Ambil nama kategori berdasarkan ID
		category, err := categorymodel.GetCategoryByID(product.CategoryID)
		if err == nil {
			product.CategoryName = category.Name
		}

		products = append(products, product)
	}

	// 🔍 Debug log
	fmt.Println("📦 Jumlah produk di DB:", len(products))
	if len(products) > 0 {
		fmt.Println("📌 Contoh produk:", products[0].Name, "-", products[0].Harga, "-", products[0].GambarURL)
	}

	return products, nil
}

func Create(product entities.Product) bool {
	collection := config.MongoDatabase.Collection("products")
	_, err := collection.InsertOne(context.TODO(), product)
	return err == nil
}

func GetByID(productID string) (entities.Product, error) {
	var product entities.Product

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	objectID, err := primitive.ObjectIDFromHex(productID)
	if err != nil {
		return product, err
	}

	pipeline := mongo.Pipeline{
		{{Key: "$match", Value: bson.D{{Key: "_id", Value: objectID}}}},
		{{Key: "$lookup", Value: bson.D{
			{Key: "from", Value: "categories"},
			{Key: "localField", Value: "category_id"},
			{Key: "foreignField", Value: "_id"},
			{Key: "as", Value: "categoryInfo"},
		}}},
		{{Key: "$unwind", Value: bson.D{
			{Key: "path", Value: "$categoryInfo"},
			{Key: "preserveNullAndEmptyArrays", Value: true},
		}}},
		{{Key: "$project", Value: bson.D{
			{Key: "_id", Value: 1},
			{Key: "name", Value: 1},
			{Key: "category_id", Value: 1},
			{Key: "category_name", Value: "$categoryInfo.name"},
			{Key: "stock", Value: 1},
			{Key: "description", Value: 1},
			{Key: "gambar_url", Value: 1},
			{Key: "harga", Value: 1},
			{Key: "created_at", Value: 1},
			{Key: "updated_at", Value: 1},
		}}},
	}

	cursor, err := config.MongoDatabase.Collection("products").Aggregate(ctx, pipeline)
	if err != nil {
		return product, err
	}
	defer cursor.Close(ctx)

	if cursor.Next(ctx) {
		if err := cursor.Decode(&product); err != nil {
			return product, err
		}
	} else {
		return product, mongo.ErrNoDocuments
	}

	return product, nil
}

func Update(id string, update entities.Product) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	updateData := bson.M{
		"name":          update.Name,
		"category_id":   update.CategoryID,
		"category_name": update.CategoryName,
		"stock":         update.Stock,
		"description":   update.Description,
		"harga":         update.Harga,
		"updated_at":    update.UpdatedAt,
	}
	if update.GambarURL != "" {
		updateData["gambar_url"] = update.GambarURL
	}

	_, err = config.MongoDatabase.Collection("products").UpdateOne(
		ctx,
		bson.M{"_id": objectID},
		bson.M{"$set": updateData},
	)
	return err
}

func Delete(id string) error {
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = config.MongoDatabase.Collection("products").DeleteOne(ctx, bson.M{"_id": objectID})
	return err
}
