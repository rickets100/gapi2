const Resource = require('../models/resources_model')
const Topic = require('../models/topics_model')

function index (req, res, next) {
  Topic.getAllTopics('topics')
  .select('*')
  .then(topics => {
    console.log('in the .then of topics.js getAllTopics')
    console.log('topics is ', topics)
    res.render('topics', { topics })
  })
}


function getOneTopic (req, res, next) {
}

module.exports = { index, getOneTopic }
