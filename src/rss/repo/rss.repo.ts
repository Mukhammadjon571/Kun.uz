import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateRSSDTO, GetRSSParamsDTO, UpdateRSSDTO } from '../dto/rss.dto';

@Injectable()
export class RssRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ email }: CreateRSSDTO) {
    return (await this.knex.insert({ email }).into('rss').returning('*'))[0];
  }

  async findAll({ offset, limit }: GetRSSParamsDTO) {
    return this.knex.select('*').from('rss').offset(offset).limit(limit);
  }

  async findOne(id: string) {
    return await this.knex.select('*').from('rss').where({ id }).first();
  }

  async update(id: string, { email }: UpdateRSSDTO) {
    return (
      await this.knex
        .update({ email })
        .from('rss')
        .where({ id })
        .returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('rss').where({ id }).returning('*')
    )[0];
  }
}
