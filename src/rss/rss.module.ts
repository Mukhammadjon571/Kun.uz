import { Module } from '@nestjs/common';
import { RssRepo } from './repo/rss.repo';
import { RssController } from './rss.controller';
import { RssService } from './rss.service';

@Module({
  controllers: [RssController],
  providers: [RssService, RssRepo],
})
export class RssModule {}
