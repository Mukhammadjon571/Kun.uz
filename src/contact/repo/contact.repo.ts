import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import {
  CreateContactDTO,
  GetContactParamsDTO,
  UpdateContactDTO,
  UpdateContactStatusDTO,
} from '../dto/contact.dto';

@Injectable()
export class ContactRepo {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create({
    name,
    email,
    subject,
    message,
    phone_number,
  }: CreateContactDTO) {
    return (
      await this.knex
        .insert({ name, email, subject, message, phone_number })
        .into('contact')
        .returning('*')
    )[0];
  }

  findAll({ offset, limit }: GetContactParamsDTO) {
    return this.knex.select('*').from('contact').offset(offset).limit(limit);
  }

  findById(id: string) {
    return this.knex.select('*').from('contact').where({ id }).first();
  }

  async update(
    id: string,
    { name, email, subject, message, phone_number }: UpdateContactDTO,
  ) {
    return (
      await this.knex
        .update({ name, email, subject, message, phone_number })
        .from('contact')
        .where({ id })
        .returning('*')
    )[0];
  }

  async updateStatus(params: UpdateContactStatusDTO) {
    return await this.knex
      .update({ status: params.status })
      .from('contact')
      .where({ id: params.contact_id })
      .returning('*');
  }

  async delete(id: string) {
    return (
      await this.knex.delete().from('contact').where({ id }).returning('*')
    )[0];
  }
}
