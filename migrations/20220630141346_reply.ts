import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
     id uuid not null primary key defualt guuid_generate_4(),
     comment_id uuid not null references comment (id),
     message varchar(1024) not null,
     username varchar(255) not null,
     likes int not null default 0,
     create_at timestamp not null default current_timestamp
  `);
}

export async function down(knex: Knex): Promise<void> {}
