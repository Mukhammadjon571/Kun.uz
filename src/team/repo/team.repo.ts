import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import {
  CreateTeamDTO,
  GetTeamParamsDTO,
  UpdateTeamDTO,
} from '../dto/team.dto';
import { Knex } from 'knex';

@Injectable()
export class TeamRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({ username, position, image }: CreateTeamDTO) {
    return (
      await this.knex
        .insert({ username, position, image })
        .into('team')
        .returning('*')
    )[0];
  }

  async findAll({ offset, limit }: GetTeamParamsDTO) {
    return this.knex.select('*').from('team').offset(offset).limit(limit);
  }

  async findOne(id: string) {
    return await this.knex.select('*').from('team').where({ id }).first();
  }

  async update(id: string, { username, position, image }: UpdateTeamDTO) {
    return (
      await this.knex
        .update({ username, position, image })
        .from('team')
        .where({ id })
        .returning('*')
    )[0];
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('team').where({ id }).returning('*')
    )[0];
  }
}
