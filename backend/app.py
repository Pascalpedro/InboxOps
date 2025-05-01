from flask import send_from_directory
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app)

# Flask-Mail configuration (example using Gmail)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'   # <-- your Gmail
app.config['MAIL_PASSWORD'] = 'your-app-password'      # <-- app password (not your normal password!)
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'

mail = Mail(app)

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message_text = data.get("message")

    # Print in terminal
    print(f"Message from {name} <{email}>: {message_text}")

    # Send Email
    try:
        msg = Message(subject=f"New Contact from {name}",
                      recipients=['your-recipient-email@example.com'], # where you want to receive
                      body=f"From: {name} <{email}>\n\n{message_text}")
        mail.send(msg)
        return jsonify({"status": "success", "message": "✅ Message received and email sent!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"status": "error", "message": "❌ Failed to send email."}), 500

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    if path != "" and os.path.exists("frontend/dist/" + path):
        return send_from_directory('frontend/dist', path)
    else:
        return send_from_directory('frontend/dist', 'index.html')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
