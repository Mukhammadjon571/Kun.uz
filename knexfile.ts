import { Knex } from 'knex';
import config from './src/config/config';
const { postgres } = config;

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: postgres.dbName,
      user: postgres.user,
      password: postgres.password,
      host: postgres.host,
      port: postgres.port,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: postgres.dbName,
      user: postgres.user,
      password: postgres.password,
      host: postgres.host,
      port: postgres.port,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: postgres.dbName,
      user: postgres.user,
      password: postgres.password,
      host: postgres.host,
      port: postgres.port,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};

export default knexConfig;
