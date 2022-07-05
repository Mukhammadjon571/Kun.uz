import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  create table if not exists tag
  (
    id          uuid      primary key  default uuid_generate_v4(),
    created_at  timestamp not null     default  current_timestamp,
    name        jsonb     not null
  );
  `);
}

export async function down(knex: Knex): Promise<void> {}
