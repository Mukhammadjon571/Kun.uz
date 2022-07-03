import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    id          uuid          not null primary key defualt uuid_generate_v4(),
    name        jsonb         not null,
    audio_file  varchar(256)  not null,
    audio_time  varchar(256)  not null,
    create_at   timestamp     not null default current_timestamp
  `)
}


export async function down(knex: Knex): Promise<void> {
}

