exports.up = function(knex, Promise) {
  return knex.schema.createTable('phrases', function (table) {
    table.increments();
    table.string('phrase').unique().notNullable();
    table.boolean('article_required').defaultTo(false);
    table.boolean('singular_only').defaultTo(false);
    table.boolean('is_place').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('phrases');
};