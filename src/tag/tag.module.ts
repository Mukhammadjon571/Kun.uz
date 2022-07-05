import { Module } from '@nestjs/common';
import { TagRepo } from './repo/tag.repo';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';


@Module({
  controllers: [TagController],
  providers: [TagService,TagRepo]
})
export class TagModule {}
