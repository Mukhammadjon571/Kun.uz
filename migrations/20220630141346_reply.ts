import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  create table if not exists reply(
     id         uuid          primary key default uuid_generate_v4(),
     create_at  timestamp     not null default current_timestamp,
     comment_id uuid          not null references comment (id) on delete cascade,
     message    varchar(1024) not null,
     username   varchar(255)  not null,
     likes      int           not null default 0
  );
  `);
}

export async function down(knex: Knex): Promise<void> {}
