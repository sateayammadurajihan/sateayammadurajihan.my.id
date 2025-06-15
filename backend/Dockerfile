FROM golang:1.23

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build semua file .go jadi 1 binary
RUN go build -o main .

CMD ["/app/main"]
