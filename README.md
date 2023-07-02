# Project description

Dataviz web app that displays statistics about antelopes species.

A [TRD](docs/TRD.md) is available in the docs folder.

Notes:

- this is only a very limited POC, it doesn't reflect the final product or even an MVP.
- you'll have to run the frontend and backend in two different terminals, as I haven't prepared a docker-compose file.

Things I would've done with more time:

- Prepare the queries in repositories instead of services
- Validate query params with json schemas
- Use a lib to infer typescript types based on json schemas
- Write integration tests
- Write docker-compose file to run both frontend and backend in one command
- Actually use pagination in the frontend for the table

## Backend

A simple ~~C~~R~~UD~~ API, based on typescript, fastify and typeorm.

For the purpose of this task, I've only implemented the `Read` part of CRUD and the database is sqlite.

Typeorm is new to me. I tried using sequelize at first but it was a bit of a pain to use with typescript. This means I've wasted time trying to use sequelize and spent some learning the bases of typeorm.

### Backend usage

Same as for the frontend, but switch to the `back` folder.

Project Setup: `npm install`

Compile and Hot-Reload for Development: `npm run dev`

Compile and Minify for Production: `npm run build`

Lint with [ESLint](https://eslint.org/): `npm run lint

Fix linting errors: `npm run lint -- --fix`

Format with prettier: `npm run format`

## Frontend

Nothing unusual here, it's a Vue.js frontend, meant for web browsers.

Everything takes place in the `front-web` folder.

### Frontend usage

Same as for the backend, but switch to the `front-web` folder.

Project Setup: `npm install`

Compile and Hot-Reload for Development: `npm run dev`

Compile and Minify for Production: `npm run build`

Lint with [ESLint](https://eslint.org/): `npm run lint

Fix linting errors: `npm run lint -- --fix`

Format with prettier: `npm run format`
