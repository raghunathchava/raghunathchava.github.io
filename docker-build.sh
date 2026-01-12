#!/bin/bash
# Docker build and run script for Raghunath Chava website

set -e

echo "🐳 Docker Build & Run Script"
echo "============================"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker daemon is not running!"
    echo "   Please start Docker Desktop or Docker daemon first."
    exit 1
fi

echo "✅ Docker daemon is running"
echo ""

# Stop and remove existing containers
echo "📦 Stopping existing containers..."
docker-compose down 2>/dev/null || true
echo ""

# Build the image
echo "🔨 Building Docker image..."
docker-compose build --no-cache
echo ""

# Start the container
echo "🚀 Starting container..."
docker-compose up -d
echo ""

# Wait for container to be healthy
echo "⏳ Waiting for container to be healthy..."
timeout=60
elapsed=0
while [ $elapsed -lt $timeout ]; do
    if docker-compose ps | grep -q "healthy"; then
        echo "✅ Container is healthy!"
        break
    fi
    sleep 2
    elapsed=$((elapsed + 2))
    echo -n "."
done
echo ""

# Show logs
echo "📋 Container logs:"
echo "-------------------"
docker-compose logs --tail=20 website
echo ""

# Show status
echo "📊 Container status:"
echo "-------------------"
docker-compose ps
echo ""

echo "✅ Done! Website should be available at: http://localhost:3004"
echo ""
echo "Useful commands:"
echo "  docker-compose logs -f website  # Follow logs"
echo "  docker-compose restart          # Restart container"
echo "  docker-compose down             # Stop container"
