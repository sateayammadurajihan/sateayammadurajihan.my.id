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
    // Ambil env vars, jika kosong gunakan default localhost (untuk development lokal)
    dbUser := os.Getenv("DB_USER")
    if dbUser == "" {
        dbUser = "root"
    }

    dbPassword := os.Getenv("DB_PASSWORD") // kosongkan jika password kosong di lokal

    dbHost := os.Getenv("DB_HOST")
    if dbHost == "" {
        dbHost = "127.0.0.1:3306"
    }

    dbName := os.Getenv("DB_NAME")
    if dbName == "" {
        dbName = "websitesate_user"
    }

    // Buat data source name (DSN)
    dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s", dbUser, dbPassword, dbHost, dbName)

    var err error
    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("Failed to open database connection:", err)
    }

    err = DB.Ping()
    if err != nil {
        log.Fatal("Failed to ping database:", err)
    }

    log.Println("Connected to MySQL database successfully")
}
