import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create table if not exists news
    (
        id             uuid         primary key default uuid_generate_v4(),
        category_id    uuid         not null  references category (id),
        tag_id         uuid         not null  references  tag (id),
        title          jsonb        not null,
        description    jsonb        not null,
        images         jsonb        not null,
        views          int          not null  default 0,
        telegram       varchar(255) not null,
        twitter        varchar(255) not null,
        facebook       varchar(255) not null,
        subcategory_id uuid         not null  references subcategory (id),
        created_at     timestamp    not null  default  current_timestamp
    );
  `);
}

export async function down(knex: Knex): Promise<void> {}
