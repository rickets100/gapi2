'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('resources', (table) => {
    table.increments();
    table.string('res_name').notNullable().defaultTo();
    table.string('res_url').notNullable().defaultTo();
    table.text('res_description').notNullable().defaultTo();
    table.string('res_format').notNullable().defaultTo();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('resources');
};
