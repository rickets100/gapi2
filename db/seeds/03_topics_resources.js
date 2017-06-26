'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics_resources').del()
  .then(function () {
    // Inserts seed entries
    return knex('topics_resources').insert([
      {
        id: 1,
        topic_id: 1,
        resource_id: 1
      },
      {
        id: 2,
        topic_id: 2,
        resource_id: 2
      },
      {
        id: 3,
        topic_id: 3,
        resource_id: 3
      },
      {
        id: 4,
        topic_id: 1,
        resource_id: 2
      },
      {
        id: 5,
        topic_id: 2,
        resource_id: 3
      }

    ])
  })
}
