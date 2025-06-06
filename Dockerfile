FROM golang:1.20

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Ubah bagian ini agar hanya build file utama
RUN go build -o main server.go

CMD ["/app/main"]
