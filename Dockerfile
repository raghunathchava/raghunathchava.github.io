FROM node:20-alpine

WORKDIR /app

# Install wget for health checks
RUN apk add --no-cache wget

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Remove test file that has unmet dependencies
RUN rm -f src/App.test.tsx src/setupTests.ts

# Expose port
EXPOSE 3004

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3004 || exit 1

# Start Vite dev server with HMR
CMD ["node", "node_modules/vite/dist/node/cli.js", "--host", "0.0.0.0", "--port", "3004"]
