FROM cypress/included:latest AS base

RUN mkdir /app
RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm i
RUN pnpm add -D cypress

FROM base AS e2e
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN $(pnpm bin)/cypress verify

CMD ["pnpm", "run", "cy:e2e"]