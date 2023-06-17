# The Quran Front-end
The Quran is written Next.js and Redux Toolkit.


- [The Quran Front-end](#the-quran-front-end)
  - [Prerequisites](#prerequisites)
    - [Installing pnpm](#installing-pnpm)
    - [Setup ESLint, Prettier](#setup-eslint-prettier)
  - [Creating a new Next.js app](#creating-a-new-nextjs-app)
  - [Deploy on Vercel](#deploy-on-vercel)

## Prerequisites
### Installing pnpm
```sh
npm install -g pnpm

# Updates all dependencies, adhering to ranges specified in package.json
pnpm up
# Updates all dependencies, ignoring ranges specified in package.json
pnpm up --latest
```
### Setup ESLint, Prettier 
Setup Prettier, ESLint Plugin for Testing Library, ESLint Plugin for Jest DOM
  [https://github.com/mehradi-github/ref-jest-rtl](https://github.com/mehradi-github/ref-jest-rtl)
  
## [Creating a new Next.js app](https://github.com/mehradi-github/ref-portfolio#install-nextjs)
Next.js is a flexible React framework that gives you building blocks to create fast web applications. 
```
pnpm create next-app --typescript
pnpm dev

#update pnpm
corepack prepare pnpm@VERSION --activate
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.