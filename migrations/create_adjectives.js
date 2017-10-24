exports.up = function(knex, Promise) {
  return knex.schema.createTable('adjectives', function (table) {
    table.increments();
    table.string('word').unique().notNullable();
    table.boolean('is_particle').defaultTo(false);
    table.boolean('is_status').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('adjectives');
};