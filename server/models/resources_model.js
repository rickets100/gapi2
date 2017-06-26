const db = require('../../db/knex')

class Resources {
  constructor () {}

  static getAllResources(resources) {
    console.log('in getAllResources')
    return db(resources)
  }

  static getOneResource(resources, id) {
    console.log('in getOneResource')
    return db(resources).select('*').where('id', id).first()
  }

  static addOneResource(resources, body) {
    console.log('in addOneResource, and body is: \n',  body)
    return db(resources).insert(body).returning('*')
  }

  static deleteOneResource(resources, id) {
    console.log('in deleteOneResource, and id is: ', id, '\n')
    let numItemsDeleted = db(resources).select('*').where({ id }).del()
    console.log('temp is ', numItemsDeleted)
    return numItemsDeleted
  }
}

module.exports = Resources
