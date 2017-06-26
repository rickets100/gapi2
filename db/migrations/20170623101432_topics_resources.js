'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('topics_resources', table => {
    table.increments()
    table.integer('topic_id').notNullable().references('id').inTable('resources').onDelete('CASCADE')
    table.integer('resource_id').notNullable().references('id').inTable('topics').onDelete('CASCADE')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('topics_resources')
}
