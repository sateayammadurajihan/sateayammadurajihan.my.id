package main

import (
    "database/sql"
    "fmt"
    "html/template"
    "net/http"

    "golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
    return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) == nil
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == http.MethodGet {
        tmpl, err := template.ParseFiles("templates/register.html")
        if err != nil {
            http.Error(w, "Gagal membuka halaman", http.StatusInternalServerError)
            return
        }
        tmpl.Execute(w, nil)
        return
    }

    nama := r.FormValue("nama")
    username := r.FormValue("username")
    email := r.FormValue("email")
    password := r.FormValue("password")

    hashedPassword, err := HashPassword(password)
    if err != nil {
        http.Error(w, "Gagal mengamankan password", http.StatusInternalServerError)
        return
    }

    _, err = DB.Exec("INSERT INTO users (nama, username, email, password) VALUES (?, ?, ?, ?)", nama, username, email, hashedPassword)
    if err != nil {
        http.Error(w, fmt.Sprintf("Gagal menyimpan data pengguna: %v", err), http.StatusInternalServerError)
        return
    }

    http.Redirect(w, r, "/login", http.StatusSeeOther)
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == http.MethodGet {
        tmpl, err := template.ParseFiles("templates/login.html")
        if err != nil {
            http.Error(w, "Gagal membuka halaman login", http.StatusInternalServerError)
            return
        }
        tmpl.Execute(w, nil)
        return
    }

    identifier := r.FormValue("username")
    password := r.FormValue("password")

    var hash string
    var username string

    err := DB.QueryRow("SELECT username, password FROM users WHERE username=? OR email=?", identifier, identifier).Scan(&username, &hash)
    if err == sql.ErrNoRows {
        http.Error(w, "Akun tidak ditemukan", http.StatusUnauthorized)
        return
    } else if err != nil {
        http.Error(w, "Terjadi kesalahan saat login", http.StatusInternalServerError)
        return
    }

    if !CheckPasswordHash(password, hash) {
        http.Error(w, "Password salah", http.StatusUnauthorized)
        return
    }

    http.SetCookie(w, &http.Cookie{
        Name:  "session_user",
        Value: username,
        Path:  "/",
    })

    http.Redirect(w, r, "/cart", http.StatusSeeOther)
}

func AuthMiddleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        _, err := r.Cookie("session_user")
        if err != nil {
            http.Redirect(w, r, "/login", http.StatusSeeOther)
            return
        }
        next(w, r)
    }
}

func CartHandler(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles("templates/cart.html")
    if err != nil {
        http.Error(w, "Gagal membuka halaman keranjang", http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
    cookie := &http.Cookie{
        Name:   "session_user",
        Value:  "",
        MaxAge: -1,
        Path:   "/",
    }
    http.SetCookie(w, cookie)
    http.Redirect(w, r, "/login", http.StatusSeeOther)
}
