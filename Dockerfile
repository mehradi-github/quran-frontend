FROM cypress/base:18.12.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN $(npm bin)/cypress verify

CMD ["npm", "run", "cy:e2e"]