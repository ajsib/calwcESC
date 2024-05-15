FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files and build the application
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Add system user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files and set permissions
COPY --from=base /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=base --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=base --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set user and expose port
USER nextjs
EXPOSE 6738
ENV PORT 6738

# Start the application
CMD HOSTNAME="0.0.0.0" node server.js
