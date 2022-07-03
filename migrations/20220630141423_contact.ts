import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
     create type contact_status as enum('new', 'pending','done');
  `);

  await knex.raw(`
  create table if not exists contact(
    id           uuid           primary key default uuid_generate_v4(),
    name         jsonb          not null,
    email        varchar(255)   not null,
    subject      varchar(255)   not null,
    message      varchar(255)   not null,
    phone_number varchar(32)   not null,
    status       contact_status not null default 'new',
    created_at   timestamp      not null default current_timestamp
  );
  `);
}

export async function down(knex: Knex): Promise<void> {}
