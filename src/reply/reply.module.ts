import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
import { ReplyRepo } from './repo/reply.repo';

@Module({
  controllers: [ReplyController],
  providers: [ReplyService, ReplyRepo],
})
export class ReplyModule {}
