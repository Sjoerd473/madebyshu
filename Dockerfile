FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY . .

# App listens internally on 3000
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
