import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    id          uuid          not null primary key default uuid_generate_v4(),
    email       varchar(255)  not null,
    created_at  timestamp     not null default current_timestamp
   `)
}


export async function down(knex: Knex): Promise<void> {
}

