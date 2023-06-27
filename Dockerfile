FROM cypress/included:latest AS base

RUN mkdir /app
RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY package.json .
RUN pnpm i

FROM base AS report
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN $(pnpm bin)/cypress verify

CMD ["pnpm", "run", "cy:report"]