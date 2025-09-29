const { Router } = require('express');
const indexController = require('../controllers/indexController')
const indexRouter = Router();
// basicauth here if needed

indexRouter.get('/privacypolicy', indexController.privacyGet)
indexRouter.get('/cookiepolicy', indexController.cookieGet)
indexRouter.get('/', indexController.indexGet)

module.exports = indexRouter