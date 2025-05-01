# Use slim python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend app
COPY backend/app.py .

# Copy frontend built files
COPY frontend/dist ./frontend/dist

# Expose port
EXPOSE 5000

# Run production-ready WSGI server
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]

