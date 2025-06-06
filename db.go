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
	rawDSN := os.Getenv("MYSQL_URL")

	if rawDSN != "" {
		// Ubah format mysql://user:pass@host:port/dbname → user:pass@tcp(host:port)/dbname
		u, err := url.Parse(rawDSN)
		if err != nil {
			log.Fatal("❌ Gagal parsing MYSQL_URL:", err)
		}

		user := u.User.Username()
		pass, _ := u.User.Password()
		host := u.Host
		dbName := strings.TrimPrefix(u.Path, "/")
		dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s", user, pass, host, dbName)

		DB, err = sql.Open("mysql", dsn)
		if err != nil {
			log.Fatal("❌ Gagal buka koneksi DB:", err)
		}
	} else {
		// fallback lokal
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

		dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s", user, pass, host, dbName)
		var err error
		DB, err = sql.Open("mysql", dsn)
		if err != nil {
			log.Fatal("❌ Gagal buka koneksi lokal DB:", err)
		}
	}

	if err := DB.Ping(); err != nil {
		log.Fatal("❌ Tidak bisa konek ke database:", err)
	}
	log.Println("✅ Berhasil konek ke database!")
}
