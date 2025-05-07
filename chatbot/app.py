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

# Keywords to recognize greetings
greeting_keywords = {"halo", "hai", "hello", "selamat pagi", "selamat siang", "selamat sore", "selamat malam", "hallo"}

@app.route("/bot", methods=["POST"])
def bot():
    data = request.values
    sender = data.get("From", "")
    message = data.get("Body", "").strip().lower()

    print("Pesan masuk:", message)

    # Handle greeting messages with welcome response
    if any(message.startswith(greet) for greet in greeting_keywords):
        response = (
            "👋 Halo! Selamat datang di Warung Sate Ayam Madura Jihan. "
            "Kami siap membantu Anda memesan sate lezat dan hidangan lainnya. 😊\n\n"
            "Ketik:\n"
            "- *menu* untuk melihat daftar menu kami.\n"
            "- *jam buka* untuk melihat jam operasional.\n"
            "- *pesan [menu] [jumlah]* untuk memesan.\n\n"
            "Mari nikmati cita rasa otentik Sate Madura kami!"
        )
    elif message == "menu":
        response = "*🍢 Berikut Menu Spesial dari Warung Sate Ayam Madura Jihan:*\n"
        for item, price in menu_items.items():
            # Capitalize properly
            name = item.title()
            # Check if the last word is numeric quantity to add " Tusuk"
            last_word = name.rstrip().split()[-1]
            if last_word.isdigit():
                name += " Tusuk"
            response += f"• {name} : Rp {price:,}\n"
        response += "\n*Yuk, pilih dan pesan yang kamu suka ya!* 😊"
    elif message == "jam buka":
        response = (
            "⏰ *Jam Buka Warung:*\n"
            "Kami siap melayani Anda setiap hari dari pukul 17.00 - 00.00 WIB.\n\n"
            "Jangan sampai kehabisan, datang ya!"
        )
    elif message.startswith("pesan"):
        try:
            # contoh format pesan: pesan sate kambing + nasi 2
            parts = message.replace("pesan", "").strip().rsplit(" ", 1)
            item = parts[0].strip()
            jumlah = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else 1

            harga = menu_items.get(item)
            if harga:
                total = harga * jumlah
                simpan_pesanan(sender, item, jumlah, total)
                response = (
                    f"✅ *Pesanan Anda Berhasil!* 🎉\n"
                    f"- Menu: {item.title()}\n"
                    f"- Jumlah: {jumlah} porsi\n"
                    f"- Total bayar: Rp {total:,}\n\n"
                    f"Terima kasih sudah memesan di Warung Sate Ayam Madura Jihan.\n"
                    f"Pesanan akan segera kami proses ya! 🙏"
                )
            else:
                response = (
                    "❌ Maaf, menu yang kamu pesan tidak tersedia.\n"
                    "Ketik *menu* untuk melihat daftar menu lengkap kami."
                )
        except Exception as e:
            print("Error:", e)
            response = "⚠️ Format pesan salah!\nContoh cara pesan: *pesan sate kambing + nasi 2*"
    else:
        response = (
            "👋 Halo! Selamat datang di Warung Sate Ayam Madura Jihan.\n"
            "Kamu bisa ketik:\n"
            "- *menu* untuk melihat daftar menu lezat kami.\n"
            "- *jam buka* untuk tahu jam buka warung.\n"
            "- *pesan [menu] [jumlah]* untuk memesan makanan favoritmu.\n\n"
            "Kami siap melayani dengan hati!"
        )

    # Simpan pesan ke DB
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

    # Format response untuk Twilio
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
    app.run(debug=True)
</content>
</create_file>
