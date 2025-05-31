package main

import (
    "log"
    "net/http"
)

func main() {
    InitDB()

    http.HandleFunc("/login", LoginHandler)
    http.HandleFunc("/register", RegisterHandler)
    http.HandleFunc("/cart", AuthMiddleware(CartHandler))
    http.HandleFunc("/logout", LogoutHandler)

    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
    http.Handle("/", http.FileServer(http.Dir("templates")))

    log.Println("Server running at http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}