# Base image with Node.js 18 on Alpine Linux
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files
COPY . .

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Add system user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressuser

# Copy necessary files and set permissions
COPY --from=base /app ./
RUN chown -R expressuser:nodejs /app

# Set user and expose port
USER expressuser
EXPOSE 6739
ENV PORT 6739

# Start the application
CMD ["node", "server.js"]