package main

import (
    "database/sql"
    "fmt"
    "log"
    "os"

    _ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func InitDB() {
    // Coba baca full DSN dari environment (lebih aman dan fleksibel di Railway)
    dsn := os.Getenv("DB_URL")
    if dsn == "" {
        // fallback ke setting lokal jika tidak ada
        dbUser := os.Getenv("DB_USER")
        if dbUser == "" {
            dbUser = "root"
        }

        dbPassword := os.Getenv("DB_PASSWORD")
        dbHost := os.Getenv("DB_HOST")
        if dbHost == "" {
            dbHost = "127.0.0.1:3306"
        }

        dbName := os.Getenv("DB_NAME")
        if dbName == "" {
            dbName = "websitesate_user"
        }

        dsn = fmt.Sprintf("%s:%s@tcp(%s)/%s", dbUser, dbPassword, dbHost, dbName)
    }

    var err error
    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("❌ Gagal membuka koneksi ke database:", err)
    }

    if err := DB.Ping(); err != nil {
        log.Fatal("❌ Gagal konek ke database:", err)
    }

    log.Println("✅ Berhasil konek ke database!")
}
