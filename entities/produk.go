package entities
import (
	"time"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	Name         string             `bson:"name"`
	CategoryID   primitive.ObjectID `bson:"category_id"`
	CategoryName string             `bson:"category_name,omitempty"`
	Stock        int                `bson:"stock"`
	Description  string             `bson:"description"`
	GambarURL    string             `bson:"gambar_url"`
	Harga        int                `bson:"harga"`
	CreatedAt    time.Time          `bson:"created_at"`   
	UpdatedAt    time.Time          `bson:"updated_at"`   
}
