const db = require('../../db/knex')

class Topics {
  constructor () {}

  static getAllTopics(topics) {
    console.log('in resources_topics: getAllTopics')
    return db(topics)
  }

}

module.exports = Topics
