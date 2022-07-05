import { Inject, Injectable } from '@nestjs/common';
import { GetRatingDTO, RatingDTO, UpdateRatingDTO } from './dto/rating.dto';
import { RatingRepo } from './repo/rating.repo';

@Injectable()
export class RatingService {
  @Inject() private readonly ratingRepo: RatingRepo;

  create(body: RatingDTO) {
    return this.ratingRepo.create(body);
  }

  get(body: GetRatingDTO) {
    return this.ratingRepo.get(body);
  }

  getById(ratingId: string) {
    return this.ratingRepo.getById(ratingId);
  }

  update(id: UpdateRatingDTO, body: RatingDTO) {
    return this.ratingRepo.updateRating(id, body);
  }
}
