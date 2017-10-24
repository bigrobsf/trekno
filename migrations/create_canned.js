exports.up = function(knex, Promise) {
  return knex.schema.createTable('canned', function (table) {
    table.increments();
    table.string('sentence').unique().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('canned');
};