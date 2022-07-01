import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create table if not exists news
    (
        id  uuid not null primary key default uuid_generate_v4(),
        created_at timestamp not null     default  current_timestamp,
        category_id  uuid not null references category (id),
        tag_id uuid not null references  tag (id)
        title jsonb not null,
        description jsonb not null,
    );
  `);
}

export async function down(knex: Knex): Promise<void> {}
