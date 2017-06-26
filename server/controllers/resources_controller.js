const Resource = require('../models/resources_model')
const Topic = require('../models/topics_model')

function index (req, res, next) {
  console.log('got here');
  Resource.getAllResources('resources')
  .then(resources => {
    res.render('resources', { resources })
  })
}

function getOneResource (req, res, next) {
  let id = req.params.id
  Resource.getOneResource('resources', id)
  .then(selectedResource => {
    console.log('in the .then of CONTROLLER: getOneResource')
    res.render('show_resource', { selectedResource })
  })
}

function newResourceForm(req, res, next) {
  res.render('new_resource_form')
}

function addOneResource (req, res, next) {
  console.log('oh hi Mark. ', req.body, '\n')
  const body = {
    res_url: req.body.res_url,
    res_name: req.body.res_name,
    res_description: req.body.res_description,
    res_format: req.body.res_format
  }
  Resource.addOneResource('resources', body)
  .then(result => {
    console.log('in the .then of CONTROLLER: addOneResource and result is ', result[0], '\n')
    res.redirect('resources')
  })
}

function deleteOneResource (req, res, next) {
  console.log('CONTROLLER: deleteOneResource. ', req.params, '\n')
  let id = req.params.id
  Resource.deleteOneResource('resources', id)
  .then(result => {
    if (result === 1) {
      console.log('yay')
      console.log('in the .then of CONTROLLER: deleteOneResource', result, '\n')
      res.redirect('index')
    }
  })
}

module.exports = { index, newResourceForm , getOneResource, addOneResource, deleteOneResource }
