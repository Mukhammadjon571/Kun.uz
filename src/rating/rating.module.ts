import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { RatingRepo } from './repo/rating.repo';

@Module({
  controllers: [RatingController],
  providers: [RatingService, RatingRepo]
})
export class RatingModule {}
