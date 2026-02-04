FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Install system dependencies (optional)
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     build-essential \
#  && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /app

# Install Python dependencies (if you have requirements.txt)
# RUN pip install --no-cache-dir -r requirements.txt

# Default command (adjust as needed)
CMD ["python", "-m", "your_main_module"]