import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateTagDTO, GetTagParamsDTO, UpdateTagDTO } from '../dto/tag.dto';

@Injectable()
export class TagRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ name }: CreateTagDTO) {
    return (await this.knex.insert({ name }).into('tag').returning('*'))[0];
  }

  async findAll({ offset, limit }: GetTagParamsDTO) {
    return this.knex.select('*').from('tag').offset(offset).limit(limit);
  }

  async findOne(id: string) {
    return await this.knex.select('*').from('tag').where({ id }).first();
  }

  async update(id: string, { name }: UpdateTagDTO) {
    return (
      await this.knex.update({ name }).from('tag').where({ id }).returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('tag').where({ id }).returning('*')
    )[0];
  }
}
