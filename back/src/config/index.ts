import envSchema from 'env-schema';
import { Type, Static } from '@sinclair/typebox';

const schema = Type.Object({
  PORT: Type.Number({
    default: 3000,
  }),
  DB_DIALECT: Type.String({
    default: 'sqlite',
  }),
  DB_STORAGE: Type.String({
    default: ':memory:',
  }),
});

type Env = Static<typeof schema>;

const config = envSchema<Env>({
  schema,
  dotenv: true,
});

export default config;
