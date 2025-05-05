from flask import send_from_directory, Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
import re

app = Flask(__name__)
CORS(app)

# Flask-Mail configuration (Gmail example)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'   # <-- your Gmail
app.config['MAIL_PASSWORD'] = 'your-app-password'      # <-- app password
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'

mail = Mail(app)

EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message_text = data.get("message", "").strip()

    # Validation
    if not name or not email or not message_text:
        return jsonify({"status": "error", "message": "All fields (name, email, message) are required."}), 400

    if not EMAIL_REGEX.match(email):
        return jsonify({"status": "error", "message": "Invalid email format."}), 400

    # Print to terminal
    print(f"Message from {name} <{email}>: {message_text}")

    try:
        # 1️⃣ Send to you (site admin)
        admin_msg = Message(
            subject=f"New Contact from {name}",
            recipients=['your-recipient-email@example.com'],  # your receiving inbox
            body=f"From: {name} <{email}>\n\n{message_text}"
        )
        mail.send(admin_msg)

        # 2️⃣ Send auto-reply to user (HTML formatted)
        user_msg = Message(
            subject="Thank you for contacting us!",
            recipients=[email]
        )
        user_msg.html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #2e6c80;">Hi {name},</h2>
                <p>Thank you for reaching out to us! 🙌<br>
                   We have received your message and will get back to you as soon as possible.</p>
                <hr>
                <p><em>Your message:</em></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    {message_text}
                </blockquote>
                <p>Best regards,<br><strong>The PedroOps Team</strong></p>
            </body>
        </html>
        """
        mail.send(user_msg)

        return jsonify({"status": "success", "message": "✅ Message received, email sent, and thank-you email sent!"}), 200

    except Exception as e:
        print(f"Email error: {e}")
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
