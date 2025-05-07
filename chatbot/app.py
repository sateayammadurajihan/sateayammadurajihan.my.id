from flask import Flask, request, Response
from datetime import datetime
from db_config import get_connection

app = Flask(__name__)

# Daftar menu
menu_items = {
    "sate kambing 10": 18000,
    "sate ayam campur kulit 10": 15000,
    "sate thaican 10": 18000,
    "sate sapi 10": 18000,
    "sate ayam polos 10": 15000,
    "soto ayam": 15000,
    "sate ayam campur kulit + lontong": 20000,
    "sate sapi + lontong": 23000,
    "sate kambing + lontong": 23000,
    "sate ayam polos + lontong": 20000,
    "sate thaican + lontong": 23000,
    "soto ayam + lontong": 20000,
    "sate kambing + nasi": 23000,
    "sate sapi + nasi": 23000,
    "sate ayam campur kulit + nasi": 20000,
    "sate ayam polos + nasi": 20000,
    "sate thaican + nasi": 23000,
    "soto ayam + nasi": 20000,
    "sate kambing 15": 27000,
    "sate ayam campur kulit 15": 23000,
    "sate thaican 15": 23000,
    "sate sapi 15": 27000,
    "sate ayam polos 15": 27000,
    "sate ayam campur kulit + lontong 15": 28000,
    "sate sapi + lontong 15": 32000,
    "sate kambing + lontong 15": 32000,
    "sate ayam polos + lontong 15": 32000,
    "sate thaican + lontong 15": 28000,
    "sate kambing + nasi 15": 32000,
    "sate sapi + nasi 15": 32000,
    "sate ayam campur kulit + nasi 15": 28000,
    "sate ayam polos + nasi 15": 32000,
    "sate thaican + nasi 15": 28000,
    "lontong": 5000,
    "kerupuk udang": 2000,
    "kerupuk black": 2000,
    "nasi": 5000,
}

@app.route("/bot", methods=["POST"])
def bot():
    data = request.values
    sender = data.get("From", "")
    message = data.get("Body", "").strip().lower()

    print("Pesan masuk:", message)

    # Cek isi pesan
    if message == "menu":
        response = "*📋 Menu Warung Sate:*\n"
        for item, price in menu_items.items():
            response += f"- {item}: Rp {price:,}\n"
    elif message == "jam buka":
        response = "🕙 *Jam Buka:*\nSetiap hari 17.00 – 00.00 WIB"
    elif message.startswith("pesan"):
        try:
            # Contoh: pesan sate kambing + nasi 2
            parts = message.replace("pesan", "").strip().rsplit(" ", 1)
            item = parts[0].strip()
            jumlah = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else 1

            harga = menu_items.get(item)
            if harga:
                total = harga * jumlah
                simpan_pesanan(sender, item, jumlah, total)
                response = f"✅ Pesanan diterima:\n- {item} x{jumlah}\n- Total: Rp {total:,}\nTerima kasih!"
            else:
                response = "⚠️ Menu tidak ditemukan. Ketik *menu* untuk lihat daftar."
        except Exception as e:
            print("Error:", e)
            response = "❌ Format salah. Contoh: *pesan sate kambing + nasi 2*"
    else:
        response = "Halo! Ketik:\n- *menu* untuk lihat menu\n- *jam buka* untuk info jam\n- *pesan [menu] [jumlah]* untuk order"

    # Simpan pesan
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO messages (sender, message, timestamp) VALUES (%s, %s, %s)",
            (sender, message, datetime.now())
        )
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as e:
        print("DB Error:", e)

    # Format XML Twilio
    twiml = f"""<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message>{response}</Message>
</Response>"""
    return Response(twiml, mimetype="application/xml")

def simpan_pesanan(sender, item, jumlah, total):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO orders (sender, item, quantity, total_price, timestamp) VALUES (%s, %s, %s, %s, %s)",
            (sender, item, jumlah, total, datetime.now())
        )
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as e:
        print("Gagal simpan pesanan:", e)

if __name__ == "__main__":
    app.run(debug=True, port=500)
