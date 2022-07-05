import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import {
  CreateCommentDTO,
  GetCommentParamsDTO,
  UpdateCommentDTO,
} from '../dto/comment.dto';

@Injectable()
export class CommentRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ message, username, likes }: CreateCommentDTO) {
    return (
      await this.knex
        .insert({ message, username, likes })
        .into('comment')
        .returning('*')
    )[0];
  }

  findById(id: string) {
    return this.knex.select('*').from('comment').where({ id }).first();
  }

  findAll({ offset, limit }: GetCommentParamsDTO) {
    return this.knex.select('*').from('comment').offset(offset).limit(limit);
  }

  async update(id: string, body: UpdateCommentDTO) {
    return (
      await this.knex.update(body).from('comment').where({ id }).returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('comment').where({ id }).returning('*')
    )[0];
  }
}
