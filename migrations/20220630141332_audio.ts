import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  create table if not exists audio
  (
    id          uuid          primary key default uuid_generate_v4(),
    create_at   timestamp     not null default current_timestamp,
    name        jsonb         not null,
    audio_file  varchar(256)  not null,
    audio_time  varchar(256)  not null
  );
  `)
}


export async function down(knex: Knex): Promise<void> {
}

