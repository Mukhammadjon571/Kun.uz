import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import {
  CreateCategoryDTO,
  GetCategoryDTO,
  UpdateCategoryDTO,
} from '../dto/category.dto';

@Injectable()
export class CategoryRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ name }: CreateCategoryDTO) {
    return (
      await this.knex.insert({ name }).into('category').returning('*')
    )[0];
  }

  async findAll({ offset, limit }: GetCategoryDTO) {
    return this.knex.select('*').from('category').offset(offset).limit(limit);
  }

  async findOne(id: string) {
    return await this.knex.select('*').from('category').where({ id }).first();
  }

  async update(id: string, { name }: UpdateCategoryDTO) {
    return (
      await this.knex
        .update({ name })
        .from('category')
        .where({ id })
        .returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('category').where({ id }).returning('*')
    )[0];
  }
}
