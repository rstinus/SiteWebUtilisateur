# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

I use pnpm for this project ! Not NPM 

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# pnpm
pnpm dev

```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash

# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Initalisation de l'API pour la BD
```
pnpm add -D prisma@6
pnpm add -D @prisma/client@6
npx prisma init
pnpm exec prisma db pull
```
