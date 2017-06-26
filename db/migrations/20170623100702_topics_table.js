'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('topics', (table) => {
    table.increments();
    table.string('topic_name').notNullable().defaultTo();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('topics');
};
