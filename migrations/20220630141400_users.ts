import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await 

  await knex.raw(`
   id uuid not null primary key default uuid_generate_v4().,
   create_at timestamp not null default current_timestamp,
   username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    role 
  `)
}


export async function down(knex: Knex): Promise<void> {
}

