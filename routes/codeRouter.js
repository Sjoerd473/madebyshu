const { Router } = require('express');
const codeController = require('../controllers/codeController')
const codeRouter = Router();
// basicauth here if needed

codeRouter.get('/', codeController.indexGet)

module.exports = codeRouter