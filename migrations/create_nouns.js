exports.up = function(knex, Promise) {
  return knex.schema.createTable('nouns', function (table) {
    table.increments();
    table.string('word').unique().notNullable();
    table.boolean('article_required').defaultTo(false);
    table.boolean('singular_only').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nouns');
};