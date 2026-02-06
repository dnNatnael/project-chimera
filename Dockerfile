FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Install system dependencies for testing
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
 && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /app

# Install Python dependencies including test dependencies
RUN pip install --no-cache-dir -e .[test] || \
    pip install --no-cache-dir pytest

# Default command runs tests
CMD ["python", "-m", "pytest", "tests/", "-v"]