exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {
          id:1,
          res_name: 'angular blah blah',
          res_url:'https://www.youtube.com/watch?v=Ga9KAvrPqGI',
          res_description:'angular resource of some kind',
          res_format:'video',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id:2,
          res_name: 'git stuff blah',
          res_url:'https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things',
          res_description:'git resource of some kind',
          res_format:'text',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id:3,
          res_name: 'CRUD cruddy mcCrudStuff',
          res_url:'https://github.com/bwreid/sam-crud-api',
          res_description:'git repo of sample CRUD app',
          res_format:'text',
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
      ])
    }).then (() => {
    return knex.raw(
      "SELECT setval('resources_id_seq', (SELECT MAX(id) FROM resources))"
    )
  })
}
