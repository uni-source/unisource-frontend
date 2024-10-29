# Step 1: Build the application
FROM node:20.10.0 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Step 2: Create the production image
FROM node:20.10.0 AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
