# Dockerfile for Two Sisters Ranch Next.js Website

# 1. Base Stage: Install dependencies
FROM node:18-alpine AS base
WORKDIR /app

# Install pnpm for dependency management
RUN npm install -g pnpm

# 2. Dependencies Stage: Install production dependencies
FROM base AS deps

# Copy package manager files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --prod

# 3. Builder Stage: Build the Next.js application
FROM base AS builder
WORKDIR /app

# Copy package manager files
COPY package.json pnpm-lock.yaml* ./

# Install ALL dependencies (including devDependencies for build)
RUN pnpm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN pnpm run build

# 4. Runner Stage: Create the final, small production image
FROM base AS runner
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production

# Copy the built application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# The Next.js app is configured to run on port 3003
EXPOSE 3003

# Start the Next.js server
CMD ["node", "server.js"]
