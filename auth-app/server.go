package main

import (
    "net/http"
)

func main() {
    initDB()

    // Serve file static & gambar
    fs := http.FileServer(http.Dir("./image"))
    http.Handle("/image/", http.StripPrefix("/image/", fs))

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        http.ServeFile(w, r, "index.html")
    })

    http.HandleFunc("/login", showLogin)
    http.HandleFunc("/register", showRegister)
    http.HandleFunc("/login/post", loginHandler)
    http.HandleFunc("/register/post", registerHandler)

    http.HandleFunc("/cart", requireLogin(func(w http.ResponseWriter, r *http.Request) {
        http.ServeFile(w, r, "cart.html")
    }))

    http.ListenAndServe(":8080", nil)
}
