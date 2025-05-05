from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import mysql.connector

app = Flask(__name__)

# Konfigurasi database
DB_HOST = 'localhost'
DB_USER = 'root'  # ganti dengan user kamu
DB_PASSWORD = ''  # ganti jika ada password
DB_NAME = 'whatsapp_bot'  # sesuaikan dengan database kamu

def get_db_connection():
    return mysql.connector.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME
    )

def log_chat(sender, message, response):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO chat_messages (sender, message, response) VALUES (%s, %s, %s)",
        (sender, message, response)
    )
    conn.commit()
    cursor.close()
    conn.close()

@app.route('/whatsapp', methods=['POST'])
def whatsapp():
    incoming_msg = request.values.get('Body', '').strip()
    sender = request.values.get('From', '')

    reply = f"Anda mengirim: {incoming_msg}\nTerima kasih sudah menghubungi kami."

    # Kirim balasan
    resp = MessagingResponse()
    msg = resp.message()
    msg.body(reply)

    # Simpan ke database
    log_chat(sender, incoming_msg, reply)

    return str(resp)

if __name__ == '__main__':
    app.run(debug=True)
