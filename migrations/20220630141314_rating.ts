import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create type rating as enum ('1', '2', '3', '4', '5');
  `);

  await knex.raw(`
    id          uuid        not null    primary key     default uuid_generate_v4(),
    created_at  timestamp   not null    default         current_timestamp,
    news_id     uuid        not null    references      news (id),
    rating      rating      not null    default         '1'
  `);
}

export async function down(knex: Knex): Promise<void> {}
