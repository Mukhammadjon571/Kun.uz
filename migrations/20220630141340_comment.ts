import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  create table if not exists comment
  (
      id         uuid           primary key default uuid_generate_v4(),
      created_at timestamp      not null default current_timestamp,
      message    varchar(1024)  not null,
      username   varchar(255)   not null,
      likes      int            not null default 0
  );
  `);
}

export async function down(knex: Knex): Promise<void> {}
