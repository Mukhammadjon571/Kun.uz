import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create type users_role as enum ('admin', 'assistant');
  `);

  await await knex.raw(`
    id          uuid          not null primary key default uuid_generate_v4(),
    username    varchar(255)  not null,
    email       varchar(255)  not null,
    password    varchar(255)  not null,
    role        users_role    not null default 'assistant',
    create_at   timestamp     not null default current_timestamp
  `);
}

export async function down(knex: Knex): Promise<void> {}
