import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { GetRatingDTO, RatingDTO, UpdateRatingDTO } from '../dto/rating.dto';

@Injectable()
export class RatingRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ news_id, rating }: RatingDTO) {
    return (
      await this.knex
        .insert({
          news_id,
          rating,
        })
        .into('rating')
        .returning('*')
    )[0];
  }

  get({ offset, limit }: GetRatingDTO) {
    return this.knex
      .select(this.knex.raw(['*', 'count(id) over()::int as total_count']))
      .from('rating')
      .offset(offset)
      .limit(limit)
      .first();
  }

  getById(id: string) {
    return this.knex
      .select('*')
      .from('rating')
      .where(id)
      .returning('*')
      .first();
  }

  async updateRating(id: UpdateRatingDTO, { news_id, rating }: RatingDTO) {
    return (
      await this.knex
        .update({ news_id, rating })
        .from('rating')
        .where({ id })
        .returning('*')
    )[0];
  }
}
