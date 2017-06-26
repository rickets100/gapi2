var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/topics_controller')


// ===== GET ALL TOPICS =====
router.get('/', ctrl.index)

// ===== GET ONE TOPIC =====
router.get('/:id', function(req, res, next) {
  console.log('in topics_routes.js: GET ONE')
  let id = req.params.id
  res.send(id)
})


module.exports = router
