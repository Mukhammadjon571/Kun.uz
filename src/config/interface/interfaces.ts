import { NODE_ENV } from '../enum/enum';

interface IServerConfig {
  port: number;
  nodeEnv: string | NODE_ENV;
}

interface IPostgresConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
}

interface IFileServiceConfig {
  url: string;
}

interface IConfig {
  server: IServerConfig;
  postgres: IPostgresConfig;
  fileService: IFileServiceConfig;
  apiSecretKey: string;
}

export default IConfig;
