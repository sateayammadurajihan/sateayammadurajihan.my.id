package main

import (
    "log"
    "net/http"
)

func main() {
    InitDB()

    http.HandleFunc("/register", RegisterHandler)
    http.HandleFunc("/login", LoginHandler)

    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
    http.Handle("/", http.FileServer(http.Dir("templates")))

    log.Println("Server running at http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
