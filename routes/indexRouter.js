const { Router } = require('express');
const indexController = require('../controllers/indexController')
const indexRouter = Router();
// basicauth here if needed

indexRouter.get('/privacypolicy', indexController.privacyGet)
indexRouter.get('/cookiepolicy', indexController.cookieGet)
indexRouter.get('/logger', indexController.loggerGet)
indexRouter.get('/en/privacypolicy', indexController.privacyEnGet)
indexRouter.get('/en/cookiepolicy', indexController.cookieEnGet)
// indexRouter.get('/en', indexController.indexEnGet)
indexRouter.get('/', indexController.indexGet)

module.exports = indexRouter