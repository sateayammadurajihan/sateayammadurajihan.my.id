package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type Testimonial struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Message   string `json:"message"`
	Rating    int    `json:"rating"`
	CreatedAt string `json:"created_at"`
}

func main() {
	// Koneksi ke MySQL
	db, err := sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/sate_ayam_madura")
	if err != nil {
		log.Fatal("Gagal koneksi ke database:", err)
	}
	defer db.Close()

	// Test koneksi
	if err := db.Ping(); err != nil {
		log.Fatal("Database tidak bisa dijangkau:", err)
	}

	// Setup router
	r := mux.NewRouter()
	r.HandleFunc("/api/testimonials", getTestimonials(db)).Methods(http.MethodGet)
	r.HandleFunc("/api/testimonials", addTestimonial(db)).Methods(http.MethodPost, http.MethodOptions)

	// Jalankan server
	fmt.Println("✅ Server berjalan di http://localhost:8080")
	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatal("Gagal menjalankan server:", err)
	}
}

func getTestimonials(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		enableCORS(w)
		w.Header().Set("Content-Type", "application/json")

		rows, err := db.Query("SELECT id, name, message, rating, created_at FROM testimonials")
		if err != nil {
			http.Error(w, "Gagal mengambil data testimoni", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		var testimonials []Testimonial
		for rows.Next() {
			var t Testimonial
			if err := rows.Scan(&t.ID, &t.Name, &t.Message, &t.Rating, &t.CreatedAt); err != nil {
				http.Error(w, "Gagal membaca data testimoni", http.StatusInternalServerError)
				return
			}
			testimonials = append(testimonials, t)
		}

		json.NewEncoder(w).Encode(testimonials)
	}
}

func addTestimonial(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		enableCORS(w)
		w.Header().Set("Content-Type", "application/json")

		// Handle preflight OPTIONS request
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		var t Testimonial
		if err := json.NewDecoder(r.Body).Decode(&t); err != nil {
			http.Error(w, "Gagal membaca data testimoni", http.StatusBadRequest)
			return
		}

		if t.Name == "" || t.Message == "" || t.Rating < 1 || t.Rating > 5 {
			http.Error(w, "Data testimoni tidak valid", http.StatusBadRequest)
			return
		}

		result, err := db.Exec("INSERT INTO testimonials (name, message, rating) VALUES (?, ?, ?)",
			t.Name, t.Message, t.Rating)
		if err != nil {
			http.Error(w, "Gagal menyimpan testimoni", http.StatusInternalServerError)
			return
		}

		id, _ := result.LastInsertId()
		t.ID = int(id)
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(t)
	}
}

// Fungsi reusable untuk CORS
func enableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}
