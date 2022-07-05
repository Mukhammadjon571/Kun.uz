import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import {
  GetReplyParamsDTO,
  CreateReplyDTO,
  UpdateReplyDTO,
} from '../dto/reply.dto';

@Injectable()
export class ReplyRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ comment_id, message, username, likes }: CreateReplyDTO) {
    return (
      await this.knex
        .insert({ comment_id, message, username, likes })
        .into('reply')
        .returning('*')
    )[0];
  }

  findById(id: string) {
    return this.knex.select('*').from('reply').where({ id }).first();
  }

  findAll({ offset, limit }: GetReplyParamsDTO) {
    return this.knex.select('*').from('reply').offset(offset).limit(limit);
  }

  async update(id: string, body: UpdateReplyDTO) {
    return (
      await this.knex.update(body).from('reply').where({ id }).returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('comment').where({ id }).returning('*')
    )[0];
  }
}
