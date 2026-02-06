.PHONY: setup test spec-check clean docker-build docker-run

# Default target
all: setup

# Setup: Install dependencies locally or ensure Docker environment
setup:
	@echo "Setting up Project Chimera..."
	@if command -v docker >/dev/null 2>&1; then \
		echo "Docker found - building image..."; \
		$(MAKE) docker-build; \
	else \
		echo "Docker not found - checking local environment..."; \
		if python3 -c "import pytest" 2>/dev/null; then \
			echo "✅ pytest already available"; \
		else \
			echo "⚠️  pytest not available and environment is externally managed"; \
			echo "💡 Use Docker (recommended) or create a virtual environment:"; \
			echo "   python3 -m venv venv && source venv/bin/activate && pip install pytest"; \
		fi; \
	fi

# Test: Run pytest inside Docker (preferred) or locally
test:
	@echo "Running tests..."
	@if command -v docker >/dev/null 2>&1; then \
		echo "Running tests in Docker..."; \
		$(MAKE) docker-run; \
	else \
		if python3 -c "import pytest" 2>/dev/null; then \
			echo "Running tests locally..."; \
			python3 -m pytest tests/ -v; \
		else \
			echo "❌ pytest not available. Run 'make setup' first."; \
			echo "💡 Or use Docker for reproducible testing."; \
			exit 1; \
		fi; \
	fi

# Spec-check: Verify code changes don't bypass specs
spec-check:
	@echo "Running specification compliance check..."
	@python3 -c "import sys; import os; \
	print('Checking specs directory exists...'); \
	sys.exit(0 if os.path.isdir('specs') else 1)" || \
		(echo "❌ specs/ directory not found" && exit 1)
	@echo "✅ specs/ directory exists"
	@python3 -c "import sys; import os; \
	print('Checking technical.md exists...'); \
	sys.exit(0 if os.path.isfile('specs/technical.md') else 1)" || \
		(echo "❌ specs/technical.md not found" && exit 1)
	@echo "✅ specs/technical.md exists"
	@echo "✅ Specification check passed"

# Docker build: Build the Docker image
docker-build:
	@echo "Building Docker image..."
	docker build -t project-chimera:latest .

# Docker run: Run tests in Docker container
docker-run:
	@echo "Running tests in Docker container..."
	docker run --rm -v "$(PWD)/tests:/app/tests" project-chimera:latest

# Clean: Clean up Docker resources
clean:
	@echo "Cleaning up..."
	@docker rmi project-chimera:latest 2>/dev/null || true
	@echo "✅ Cleanup complete"

# Help: Show available targets
help:
	@echo "Project Chimera - Available targets:"
	@echo "  setup      - Install dependencies or build Docker image"
	@echo "  test       - Run pytest tests (Docker preferred)"
	@echo "  spec-check - Verify specs/ directory and technical.md exist"
	@echo "  docker-build - Build Docker image"
	@echo "  docker-run  - Run tests in Docker container"
	@echo "  clean      - Clean up Docker resources"
	@echo "  help       - Show this help message"