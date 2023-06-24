FROM cypress/base:18.16.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install pnpm

RUN pnpm install

RUN $(pnpm bin)/cypress verify

CMD ["pnpm", "run", "cy:e2e"]