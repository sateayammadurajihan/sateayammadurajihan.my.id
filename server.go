package main

import (
    "log"
    "net/http"
    "html/template"
)

func main() {
    InitDB()

    // Route untuk form dan aksi
    http.HandleFunc("/login", LoginHandler)
    http.HandleFunc("/register", RegisterHandler)
    http.HandleFunc("/cart", AuthMiddleware(CartHandler))
    http.HandleFunc("/logout", LogoutHandler)

    http.HandleFunc("/api/testimonials", func(w http.ResponseWriter, r *http.Request) {
    if r.Method == http.MethodGet {
        GetTestimonialsHandler(w, r)
    } else if r.Method == http.MethodPost || r.Method == http.MethodOptions {
        AddTestimonialHandler(w, r)
    } else {
        http.Error(w, "Metode tidak diizinkan", http.StatusMethodNotAllowed)
    }
})


    // Serve file statis (CSS, JS, gambar)
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    // Serve halaman utama (index.html)
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        if r.URL.Path != "/" {
            http.NotFound(w, r)
            return
        }

        tmpl, err := template.ParseFiles("templates/index.html")
        if err != nil {
            http.Error(w, "Gagal membuka halaman utama", http.StatusInternalServerError)
            return
        }
        tmpl.Execute(w, nil)
    })

    log.Println("Server running at http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
