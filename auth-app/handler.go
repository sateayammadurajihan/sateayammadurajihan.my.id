package main

import (
    "fmt"
    "net/http"

    "golang.org/x/crypto/bcrypt"
)

// Hash password
func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

// Check password hash
func CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

// Handler register
func RegisterHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == http.MethodGet {
        http.ServeFile(w, r, "templates/register.html")
        return
    }
    if r.Method == http.MethodPost {
        nama := r.FormValue("nama")
        username := r.FormValue("username")
        email := r.FormValue("email")
        password := r.FormValue("password")
        confirm := r.FormValue("confirm_password")

        if password != confirm {
            http.Error(w, "Password tidak sama", http.StatusBadRequest)
            return
        }

        hashed, err := HashPassword(password)
        if err != nil {
            http.Error(w, "Error hashing password", http.StatusInternalServerError)
            return
        }

        _, err = DB.Exec("INSERT INTO users (nama, username, email, password) VALUES (?, ?, ?, ?)", nama, username, email, hashed)
        if err != nil {
            http.Error(w, fmt.Sprintf("Error insert user: %v", err), http.StatusInternalServerError)
            return
        }

        // Tampilkan pesan sukses dan redirect otomatis ke login
        w.Header().Set("Content-Type", "text/html")
        fmt.Fprintln(w, `<html><body>
            <h2>Anda berhasil daftar!</h2>
            <p><a href="/login">Klik di sini untuk login</a></p>
            <script>
                setTimeout(function(){
                    window.location.href = "/login";
                }, 3000); // redirect setelah 3 detik
            </script>
            </body></html>`)
    }
}

// Handler login
func LoginHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == http.MethodGet {
        http.ServeFile(w, r, "templates/login.html")
        return
    }
    if r.Method == http.MethodPost {
        identifier := r.FormValue("identifier")
        password := r.FormValue("password")

        var id int
        var username string
        var hash string

        err := DB.QueryRow("SELECT id, username, password FROM users WHERE username=? OR email=?", identifier, identifier).Scan(&id, &username, &hash)
        if err != nil {
            http.Error(w, "User tidak ditemukan", http.StatusUnauthorized)
            return
        }

        if !CheckPasswordHash(password, hash) {
            http.Error(w, "Password salah", http.StatusUnauthorized)
            return
        }

        _, _ = DB.Exec("INSERT INTO logins (email, login_time) VALUES (?, NOW())", identifier)

        http.Redirect(w, r, "/", http.StatusSeeOther)
    }
}
