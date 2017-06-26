var express = require('express')
var router = express.Router()
const ctrl = require('../controllers/resources_controller')

// ===== GET THE RESOURCE FORM =====
router.get('/new', ctrl.newResourceForm)

// ===== GET ONE RESOURCE =====
router.get('/:id', ctrl.getOneResource)

// ===== DELETE A RESOURCE =====
router.delete('/:id', ctrl.deleteOneResource)

// ===== ADD A RESOURCE =====
router.post('/', ctrl.addOneResource)

// ===== GET ALL RESOURCES =====
router.get('/', ctrl.index)

module.exports = router
