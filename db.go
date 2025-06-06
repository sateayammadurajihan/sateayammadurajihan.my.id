package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/url"
	"os"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func InitDB() {
	var dsn string
	var err error

	rawDSN := os.Getenv("MYSQL_URL")
	if rawDSN != "" {
		// Format: mysql://user:pass@host:port/dbname
		u, parseErr := url.Parse(rawDSN)
		if parseErr != nil {
			log.Fatal("❌ Gagal parsing MYSQL_URL:", parseErr)
		}

		user := u.User.Username()
		pass, _ := u.User.Password()
		host := u.Host
		dbName := strings.TrimPrefix(u.Path, "/")

		dsn = fmt.Sprintf("%s:%s@tcp(%s)/%s", user, pass, host, dbName)
	} else {
		// Fallback ke koneksi lokal
		user := os.Getenv("DB_USER")
		if user == "" {
			user = "root"
		}
		pass := os.Getenv("DB_PASSWORD")
		host := os.Getenv("DB_HOST")
		if host == "" {
			host = "127.0.0.1:3306"
		}
		dbName := os.Getenv("DB_NAME")
		if dbName == "" {
			dbName = "websitesate_user"
		}

		dsn = fmt.Sprintf("%s:%s@tcp(%s)/%s", user, pass, host, dbName)
	}

	// Buka koneksi database
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("❌ Gagal membuka koneksi ke database:", err)
	}

	// Tes koneksi
	if err := DB.Ping(); err != nil {
		log.Fatal("❌ Tidak bisa konek ke database:", err)
	}

	log.Println("✅ Berhasil konek ke database!")
}
