import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create type news_rating as enum ('1', '2', '3', '4', '5');
  `);

  await knex.raw(`
  create table if not exists rating
  (
    id          uuid        not null    primary key     default uuid_generate_v4(),
    created_at  timestamp   not null    default         current_timestamp,
    news_id     uuid        not null    references      news (id),
    rating      news_rating      not null    default         '1'
  );
  `);
}

export async function down(knex: Knex): Promise<void> {}
