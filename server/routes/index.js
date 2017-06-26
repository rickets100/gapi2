var express = require('express');
var router = express.Router();
const Resource = require('../controllers/resources_controller')
const Topic = require('../controllers/topics_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
