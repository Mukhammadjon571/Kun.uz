import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import {
  CreateUserDTO,
  UpdateUserDTO,
  GetUserParamsDTO,
} from '../dto/users.dto';

@Injectable()
export class UsersRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ username, email, password, role }: CreateUserDTO) {
    return (
      await this.knex
        .insert({ username, email, password, role })
        .into('users')
        .returning('*')
    )[0];
  }

  async findAll({ offset, limit }: GetUserParamsDTO) {
    return this.knex.select('*').from('users').offset(offset).limit(limit);
  }

  async findOne(id: string) {
    return await this.knex.select('*').from('users').where({ id }).first();
  }

  async update(id: string, { username, email, password, role }: UpdateUserDTO) {
    return (
      await this.knex
        .update({ username, email, password, role })
        .from('users')
        .where({ id })
        .returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('users').where({ id }).returning('*')
    )[0];
  }
}
