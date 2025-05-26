package main

import (
    "net/http"
    "html/template"
)

func showLogin(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("templates/login.html")
    t.Execute(w, nil)
}

func showRegister(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("templates/register.html")
    t.Execute(w, nil)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == "POST" {
        username := r.FormValue("username")
        password := r.FormValue("password")

        var id int
        err := db.QueryRow("SELECT id FROM users WHERE username=? AND password=?", username, password).Scan(&id)
        if err != nil {
            http.Redirect(w, r, "/login", http.StatusSeeOther)
            return
        }

        http.SetCookie(w, &http.Cookie{
            Name:  "user_id",
            Value: username,
            Path:  "/",
        })

        http.Redirect(w, r, "/", http.StatusSeeOther)
    }
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == "POST" {
        name := r.FormValue("name")
        username := r.FormValue("username")
        password := r.FormValue("password")

        _, err := db.Exec("INSERT INTO users (name, username, password) VALUES (?, ?, ?)", name, username, password)
        if err != nil {
            http.Error(w, "Gagal register", http.StatusInternalServerError)
            return
        }
        http.Redirect(w, r, "/login", http.StatusSeeOther)
    }
}
