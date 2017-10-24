exports.up = function(knex, Promise) {
  return knex.schema.createTable('verbs', function (table) {
    table.increments();
    table.string('word').unique().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('verbs');
};