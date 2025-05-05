from flask import Flask, request, Response
import mysql.connector
from twilio.twiml.messaging_response import MessagingResponse
import os

app = Flask(__name__)

# Konfigurasi MySQL dari environment variables
db_config = {
    'host': os.environ.get('MYSQL_HOST', 'localhost'),
    'user': os.environ.get('MYSQL_USER', 'root'),
    'password': os.environ.get('MYSQL_PASSWORD', ''),
    'database': os.environ.get('MYSQL_DATABASE', 'warung_sate_ayam'),
    'autocommit': True
}

def get_db_connection():
    return mysql.connector.connect(**db_config)

def fetch_menu():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT name, price FROM menus WHERE stock > 0 ORDER BY id")
    results = cursor.fetchall()
    cursor.close()
    conn.close()
    return results

def save_order(phone, order_text):
    conn = get_db_connection()
    cursor = conn.cursor()
    sql = "INSERT INTO orders (customer_phone, order_text, status) VALUES (%s, %s, 'pending')"
    cursor.execute(sql, (phone, order_text))
    order_id = cursor.lastrowid
    conn.commit()
    cursor.close()
    conn.close()
    return order_id

@app.route('/webhook', methods=['POST'])
def webhook():
    incoming_msg = request.values.get('Body', '').strip().lower()
    from_number = request.values.get('From', '')
    resp = MessagingResponse()
    msg = resp.message()

    if 'menu' in incoming_msg:
        menu_items = fetch_menu()
        if not menu_items:
            msg.body("Maaf, menu kami sedang kosong.")
        else:
            text = "Menu Warung Sate Ayam:\n"
            for item in menu_items:
                text += f"- {item['name']}: Rp {item['price']}\n"
            text += "\nKirim pesan 'pesan [nama menu] [jumlah]' untuk memesan."
            msg.body(text)
    elif incoming_msg.startswith('pesan '):
        order_text = incoming_msg[6:].strip()
        order_id = save_order(from_number, order_text)
        msg.body(f"Terima kasih, pesanan Anda sudah diterima dengan ID: {order_id}. Kami akan menghubungi Anda untuk konfirmasi.")
    elif 'halo' in incoming_msg or 'hi' in incoming_msg:
        msg.body("Halo! Saya chatbot Warung Sate Ayam Madura Jihan. Ketik 'menu' untuk melihat daftar menu atau 'pesan [nama menu] [jumlah]' untuk memesan.")
    else:
        msg.body("Maaf, saya tidak mengerti. Ketik 'menu' untuk melihat daftar menu atau 'pesan [nama menu] [jumlah]' untuk memesan.")

    return Response(str(resp), mimetype="application/xml")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
