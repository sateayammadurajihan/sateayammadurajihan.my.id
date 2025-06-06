package main

import (
    "log"
    "net/http"
    "html/template"
    "os"
)

func main() {
    InitDB()

    // Route auth dan halaman
    http.HandleFunc("/login", LoginHandler)
    http.HandleFunc("/register", RegisterHandler)
    http.HandleFunc("/cart", AuthMiddleware(CartHandler))
    http.HandleFunc("/logout", LogoutHandler)

    // API testimoni dengan dukungan CORS
    http.HandleFunc("/api/testimonials", func(w http.ResponseWriter, r *http.Request) {
        enableCORS(w) // <--- penting agar fetch dari frontend bisa masuk

        switch r.Method {
        case http.MethodGet:
            GetTestimonialsHandler(w, r)
        case http.MethodPost:
            AddTestimonialHandler(w, r)
        case http.MethodOptions:
            // CORS preflight request
            w.WriteHeader(http.StatusOK)
        default:
            http.Error(w, "Metode tidak diizinkan", http.StatusMethodNotAllowed)
        }
    })

    // Static files (CSS, JS, images)
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    // Halaman utama
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

    // Port
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    log.Printf("Server running at http://localhost:%s\n", port)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}
