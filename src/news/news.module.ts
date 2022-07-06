import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsRepo } from './repo/news.repo';

@Module({
  controllers: [NewsController],
  providers: [NewsService, NewsRepo]
})
export class NewsModule {}
