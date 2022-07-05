import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepo } from './repo/comment.repo';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CommentRepo],
})
export class CommentModule {}
