FROM node:24-alpine

# Install tools so we can build sqlite3 deps
RUN apk add --update --no-cache git python3 make g++ openssl

# PNPM Configuration
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest-10 --activate

# Add all files
COPY . .

# Install deps (cached)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --no-frozen-lockfile

# Generate Prisma + Zod
RUN pnpm run db:generate

# Build project
RUN pnpm run build
