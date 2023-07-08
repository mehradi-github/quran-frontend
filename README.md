# The Quran Front-end

The Quran is written Next.js and Redux Toolkit.

- [The Quran Front-end](#the-quran-front-end)
  - [Prerequisites](#prerequisites)
    - [Installing pnpm](#installing-pnpm)
    - [Jest and React Testing Library](#jest-and-react-testing-library)
    - [Setup ESLint, Prettier](#setup-eslint-prettier)
    - [Mocking API with Cypress](#mocking-api-with-cypress)
  - [Deploy on Vercel](#deploy-on-vercel)

## Prerequisites

### Installing pnpm

Next.js is a flexible React framework that gives you building blocks to create fast web applications. [https://github.com/mehradi-github/ref-portfolio#install-nextjs](https://github.com/mehradi-github/ref-portfolio#install-nextjs)

```sh
npm install -g pnpm

# With Redux
pnpm create next-app --example with-redux quran-frontend

# OR

# Create next-app via Pnpm
pnpm create next-app --typescript
# OR
pnpm create next-app@latest quran-frontend --template typescript


pnpm dev

#update pnpm
corepack prepare pnpm@VERSION --activate

# Updates all dependencies, adhering to ranges specified in package.json
pnpm up
# Updates all dependencies, ignoring ranges specified in package.json
pnpm up --latest

```

### Jest and React Testing Library

[Jest and React Testing Library](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library) are frequently used together for Unit Testing.

### Setup ESLint, Prettier

Setup Prettier, ESLint Plugin for Testing Library, ESLint Plugin for Jest DOM
[https://github.com/mehradi-github/ref-jest-rtl](https://github.com/mehradi-github/ref-jest-rtl)

### Mocking API with Cypress

Cypress is a purely JavaScript-based front-end testing tool built for the modern web.
[https://github.com/mehradi-github/e2e-cypress-docker#mocking-api-with-cypress](https://github.com/mehradi-github/e2e-cypress-docker#mocking-api-with-cypress)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
