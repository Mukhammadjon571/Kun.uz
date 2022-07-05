import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  create table if not exists rss
  (
    id          uuid          primary key default uuid_generate_v4(),
    created_at  timestamp     not null default current_timestamp,
    email       varchar(255)  not null
  );
   `)
}


export async function down(knex: Knex): Promise<void> {
}

