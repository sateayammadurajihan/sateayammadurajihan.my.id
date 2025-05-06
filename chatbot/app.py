from flask import Flask, request, jsonify, Response
from datetime import datetime
from db_config import get_connection

app = Flask(__name__)

@app.route("/bot", methods=["POST"])
def bot():
    data = request.values
    sender = data.get("From", "")
    message = data.get("Body", "")

    print("Pesan masuk:", message)

    response = f"Halo, kamu mengirim: {message}"

    # Simpan ke DB
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

    # Balasan Twilio format XML
    twiml_response = f"""<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message>{response}</Message>
</Response>"""

    return Response(twiml_response, mimetype="application/xml")

if __name__ == "__main__":
    app.run()
