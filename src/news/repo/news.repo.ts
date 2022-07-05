import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import {
  CreateNewsDTO,
  DeleteNewsDTO,
  GetNewsByIdDTO,
  GetNewsDTO,
  UpdateNewsDTO,
} from '../dto/news.dto';

@Injectable()
export class NewsRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async createNews({
    category_id,
    tag_id,
    description,
    images,
    telegram,
    twitter,
    facebook,
    instagram,
    subcategory_id,
  }: CreateNewsDTO) {
    return (
      await this.knex
        .insert({
          category_id,
          tag_id,
          description,
          images,
          telegram,
          twitter,
          facebook,
          instagram,
          subcategory_id,
        })
        .into('news')
        .returning('*')
    )[0];
  }

  getNews({ offset, limit }: GetNewsDTO) {
    const { knex } = this;
    return knex
      .select(knex.raw(['*', 'count(id) over()::int as total_count']))
      .from('news')
      .offset(offset)
      .limit(limit);
  }

  getById(id: GetNewsByIdDTO) {
    return this.knex.select('*').from('news').where({ id }).first();
  }

  async updateNews({
    id,
    category_id,
    tag_id,
    description,
    images,
    telegram,
    twitter,
    facebook,
    instagram,
    subcategory_id,
  }: UpdateNewsDTO) {
    return (
      await this.knex
        .update({
          category_id,
          tag_id,
          description,
          images,
          telegram,
          twitter,
          facebook,
          instagram,
          subcategory_id,
        })
        .from('news')
        .where({ id: id })
        .returning('*')
    )[0];
  }

  async deleteNews(params: DeleteNewsDTO) {
    return (
      await this.knex
        .delete()
        .from('news')
        .where({ id: params.id })
        .returning('*')
    )[0];
  }
}
