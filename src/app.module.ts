import { Module } from '@nestjs/common';
import knexConfig from 'knexfile';
import { KnexModule } from 'nest-knexjs';
import config from './config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [KnexModule.forRoot({ config: knexConfig[config.server.nodeEnv] }), NewsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
