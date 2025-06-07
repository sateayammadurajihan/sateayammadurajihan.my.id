package main

import (
    "log"
    "net/http"
    "html/template"
    "os"
)

func main() {
    InitDB()

    // ✅ Route untuk login & register tidak dibungkus middleware
    http.HandleFunc("/login", LoginHandler)
    http.HandleFunc("/register", RegisterHandler)

    // ✅ Route yang dilindungi login
    http.HandleFunc("/cart", AuthMiddleware(CartHandler))
    http.HandleFunc("/logout", LogoutHandler)

    // ✅ Testimoni API
    http.HandleFunc("/api/testimonials", func(w http.ResponseWriter, r *http.Request) {
        switch r.Method {
        case http.MethodGet:
            GetTestimonialsHandler(w, r)
        case http.MethodPost, http.MethodOptions:
            AddTestimonialHandler(w, r)
        default:
            http.Error(w, "Metode tidak diizinkan", http.StatusMethodNotAllowed)
        }
    })

    // ✅ File statis
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    // ✅ Halaman utama (index)
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        if r.URL.Path != "/" {
            http.NotFound(w, r)
            return
        }

        tmpl, err := template.ParseFiles("templates/index.html")
        if err != nil {
            log.Println("ERROR parsing index.html:", err)
            http.Error(w, "Gagal membuka halaman utama", http.StatusInternalServerError)
            return
        }

        if err := tmpl.Execute(w, nil); err != nil {
            log.Println("ERROR execute index.html:", err)
            http.Error(w, "Gagal menampilkan halaman", http.StatusInternalServerError)
        }
    })

    // ✅ Jalankan server
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    log.Printf("Server running at http://localhost:%s\n", port)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}
