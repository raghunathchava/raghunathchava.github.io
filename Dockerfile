FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Remove test file that has unmet dependencies
RUN rm -f src/App.test.tsx src/setupTests.ts

# Expose port for HMR
EXPOSE 3003

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3003 || exit 1

# Start Vite dev server with HMR
CMD ["npm", "run", "dev"]
