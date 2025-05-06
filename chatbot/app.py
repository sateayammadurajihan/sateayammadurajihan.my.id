from flask import Flask, request, jsonify
from datetime import datetime
from db_config import get_connection

app = Flask(__name__)

@app.route("/bot", methods=["POST"])
def bot():
    data = request.values
    sender = data.get("From", "")
    message = data.get("Body", "")

    print("Pesan masuk:", message)

    # Respon awal
    response = f"Halo, kamu mengirim: {message}"

    # Simpan ke DB
    try:
        conn = get_connection()
        cursor = conn.cursor()
        sql = "INSERT INTO chat_messages (sender, message, response, created_at) VALUES (%s, %s, %s, %s)"
        cursor.execute(sql, (sender, message, response, datetime.now()))
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as e:
        print("DB Error:", e)
        return jsonify({"error": "Failed to save message to database"}), 500

    # Balasan ke WhatsApp
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message>{response}</Message>
</Response>"""

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=500)
