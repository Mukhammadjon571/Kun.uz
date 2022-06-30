import * as dotenv from 'dotenv';
import * as path from 'path';
import { NODE_ENV } from './enum/enum';
import IConfig from './interface/interfaces';

dotenv.config({
  path: path.resolve('.env'),
});

const { env } = process;

const config: IConfig = {
  server: {
    port: +env.HTTP_PORT || 3000,
    nodeEnv: env.NODE_ENV || NODE_ENV.development,
  },
  postgres: {
    host: env.PG_HOST || 'localhost',
    port: +env.PG_PORT || 5432,
    user: env.PG_USER || 'postges',
    password: env.PG_PASSWORD || '1234',
    dbName: env.dbName || 'kun_uz',
  },
  fileService: {
    url: env.FILE_SERVICE_URL,
  },
  apiSecretKey:
    "VvGE'Q3/b1[qA$n1%5B3y7TA.E|G'Rd)o~{dOD[n@q|('favuUVHTlgwa39TX<j",
};

export default config;
