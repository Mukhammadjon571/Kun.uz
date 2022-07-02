import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    id uuid not null primary key default uuid_generate_v4(),
    
  `)
  
}


export async function down(knex: Knex): Promise<void> {
}

