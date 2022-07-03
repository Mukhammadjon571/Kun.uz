import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  create table if not exists team
  (
    id          uuid          primary key default uuid_generate_v4(),
    username    varchar(255)  not null,
    position    varchar(255)  not null,
    image       varchar(255)  not null,
    created_at  timestamp     not null default current_timestamp
  );
   `)
}


export async function down(knex: Knex): Promise<void> {
}

