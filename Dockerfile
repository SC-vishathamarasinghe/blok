# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies stage
FROM base AS deps

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Development stage - install components and run dev server
FROM base AS dev

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy essential files needed for component installation
# We need package.json and tsconfig.json for shadcn CLI to work
COPY package.json package-lock.json* ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY components.json ./
COPY components-config.json ./
COPY install-components.sh ./

# Copy app/ directory structure (needed for shadcn to update app/globals.css)
# Copy lib/ directory (components may reference @/lib/utils)
COPY app/ ./app/
COPY lib/ ./lib/

# Make script executable
RUN chmod +x install-components.sh

# Install components from components-config.json
# This happens BEFORE copying the rest of the app to ensure components exist
# when Next.js starts scanning files
# NOTE: components/ui/ directory is excluded via .dockerignore, so components
# will be installed fresh, not copied from the repository
RUN ./install-components.sh

# Install any new dependencies that may have been added by components
RUN npm install

# Copy the rest of the application (components/ui/ is excluded via .dockerignore)
# This ensures we use the freshly installed components, not repository ones
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment to development
ENV NODE_ENV=development

# Start the development server
CMD ["npm", "run", "dev"]

