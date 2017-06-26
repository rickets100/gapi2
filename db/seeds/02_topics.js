exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(function () {
      return knex('topics').insert([
        {
          id:1,
          topic_name:'CRUD',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id:2,
          topic_name:'Angular',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id:3,
          topic_name:'Git',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
      ])
    }).then (() => {
    return knex.raw(
      "SELECT setval('topics_id_seq', (SELECT MAX(id) FROM topics))"
    )
  })
}
