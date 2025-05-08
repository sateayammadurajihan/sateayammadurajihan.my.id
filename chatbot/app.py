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

# Keyword sapaan
greeting_keywords = {"halo", "hai", "hello", "selamat pagi", "selamat siang", "selamat sore", "selamat malam", "hallo"}

@app.route("/bot", methods=["POST"])
def bot():
    data = request.values
    sender = data.get("From", "")
    message = data.get("Body", "").strip().lower()

    print("Pesan masuk:", message)

    # Jawaban sapaan
    if any(message.startswith(greet) for greet in greeting_keywords):
        response = (
            "👋 Halo! Selamat datang di *Warung Sate Ayam Madura Jihan*.\n"
            "Kami siap bantu kamu memesan sate lezat dan menu lainnya. 😋\n\n"
            "*Ketik salah satu perintah berikut:*\n"
            "- menu → lihat daftar menu\n"
            "- jam buka → info jam operasional\n"
            "- pesan [menu] [jumlah] → contoh: *pesan sate sapi 10 2*\n\n"
            "Selamat menikmati layanan kami! 🍢"
        )

    elif message == "menu":
        response = "*📋 Berikut Menu Spesial dari Warung Sate Ayam Madura Jihan:*\n"
        for item, price in menu_items.items():
            name = item.title()
            if name.split()[-1].isdigit():
                name += " Tusuk"
            response += f"• {name} : Rp {price:,}\n"
        response += "\n*Ketik contoh: pesan sate sapi 10 2* untuk memesan."

    elif message == "jam buka":
        response = (
            "🕐 *Jam Operasional Warung:*\n"
            "Buka setiap hari dari pukul *17.00 - 00.00 WIB*.\n"
            "Silakan datang langsung atau pesan lewat sini ya. 😊"
        )

    elif message.startswith("pesan"):
        try:
            # Ambil item dan jumlah dari pesan
            parts = message.replace("pesan", "").strip().rsplit(" ", 1)
            item = parts[0].strip()
            jumlah = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else 1

            harga = menu_items.get(item)
            if harga:
                total = harga * jumlah
                simpan_pesanan(sender, item, jumlah, total)
                response = (
                    f"✅ *Pesanan kamu sudah kami catat!* 📋\n"
                    f"- Menu: {item.title()}\n"
                    f"- Jumlah: {jumlah} porsi\n"
                    f"- Total bayar: Rp {total:,}\n\n"
                    f"Terima kasih sudah memesan di *Warung Sate Ayam Madura Jihan*.\n"
                    f"Siap, pesanan kamu kami catat ya! Kami akan segera proses. 😊"
                )
            else:
                response = (
                    "❌ Maaf, menu tersebut belum tersedia.\n"
                    "Ketik *menu* untuk melihat daftar lengkap."
                )
        except Exception as e:
            print("Error:", e)
            response = (
                "⚠️ Format pesan salah!\n"
                "Contoh: *pesan sate ayam campur kulit 10 2*"
            )

    else:
        response = (
            "🤖 Maaf, kami belum mengenali perintah itu.\n\n"
            "*Ketik salah satu:*\n"
            "- menu\n"
            "- jam buka\n"
            "- pesan [menu] [jumlah]\n\n"
            "Contoh: *pesan sate kambing + nasi 2*"
        )

    # Simpan semua pesan masuk ke DB
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO chat_messages (sender, message, created_at) VALUES (%s, %s, %s)",
            (sender, message, datetime.now())
        )
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as e:
        print("DB Error:", e)

    # Format XML untuk Twilio
    twiml = f"""<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message>{response}</Message>
</Response>"""
    return Response(twiml, mimetype="application/xml")

# Simpan data pesanan ke DB
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
    import os
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port)
