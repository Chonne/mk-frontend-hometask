# Project description

Dataviz web app that displays statistics about antelopes species.

A [TRD](docs/TRD.md) is available in the docs folder.

Note: this is only a very limited POC, it doesn't reflect the final product or even an MVP.

## Frontend

Nothing unusual here, it's a Vue.js frontend, meant for web browsers.

Everything takes place in the `front-web` folder.

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Backend

A simple ~~C~~R~~UD~~ API, based on typescript, fastify and typeorm.

For the purpose of this task, I've only implemented the `Read` part of CRUD and the database is sqlite.

Typeorm is new to me. I tried using sequelize at first but it was a bit of a pain to use with typescript. This means I've wasted time trying to use sequelize and spent some learning the bases of typeorm.

Things I would've done with more time:

- Prepare the queries in repositories instead of services
- Validate inputs with json schemas
- Use a lib to infer typescript types based on json schemas
