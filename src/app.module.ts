import { Module } from '@nestjs/common';
import knexConfig from 'knexfile';
import { KnexModule } from 'nest-knexjs';
import config from './config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [KnexModule.forRoot({ config: knexConfig[config.server.nodeEnv] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
