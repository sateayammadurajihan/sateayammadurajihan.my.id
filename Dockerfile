# image resmi Golang
FROM golang:1.20

# Buat direktori kerja di container
WORKDIR /app

# Salin semua file ke direktori kerja
COPY . .

# Ambil semua dependencies Go
RUN go mod download

# Build aplikasi Go jadi binary bernama "main"
RUN go build -o main .

# Jalankan aplikasi
CMD ["/app/main"]
