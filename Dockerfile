FROM cypress/included:latest AS report

RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm i
RUN npm add -D cypress
COPY . .
RUN $(npm bin)/cypress verify

CMD ["npm", "run", "cy:report"]