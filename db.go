package main

import (
	"database/sql"
	"log"
	"net/url"
	"os"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func InitDB() {
	// Ambil dari MYSQL_URL Railway jika tersedia
	rawDSN := os.Getenv("MYSQL_URL")
	if rawDSN != "" {
		// Railway format: mysql://root:pass@host:port/dbname
		parsed, err := url.Parse(rawDSN)
		if err != nil {
			log.Fatal("❌ Gagal parsing MYSQL_URL:", err)
		}

		user := parsed.User.Username()
		pass, _ := parsed.User.Password()
		host := parsed.Host
		dbname := strings.TrimPrefix(parsed.Path, "/")

		// Format ulang ke Go MySQL Driver style
		rawDSN = user + ":" + pass + "@tcp(" + host + ")/" + dbname
	}

	// Jika tidak tersedia, fallback ke lokal
	if rawDSN == "" {
		user := os.Getenv("DB_USER")
		if user == "" {
			user = "root"
		}
		pass := os.Getenv("DB_PASSWORD") // bisa kosong
		host := os.Getenv("DB_HOST")
		if host == "" {
			host = "127.0.0.1:3306"
		}
		dbname := os.Getenv("DB_NAME")
		if dbname == "" {
			dbname = "websitesate_user"
		}
		rawDSN = user + ":" + pass + "@tcp(" + host + ")/" + dbname
	}

	var err error
	DB, err = sql.Open("mysql", rawDSN)
	if err != nil {
		log.Fatal("❌ Gagal membuka koneksi ke database:", err)
	}

	if err := DB.Ping(); err != nil {
		log.Fatal("❌ Gagal konek ke database:", err)
	}

	log.Println("✅ Berhasil konek ke database!")
}
