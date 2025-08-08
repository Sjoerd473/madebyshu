const { Router } = require('express');
const indexController = require('../controllers/indexController')
const indexRouter = Router();
// basicauth here if needed

indexRouter.get('/', indexController.indexGet)

module.exports = indexRouter