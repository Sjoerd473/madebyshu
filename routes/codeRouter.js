const { Router } = require('express');
const codeController = require('../controllers/codeController')
const codeRouter = Router();
// basicauth here if needed

codeRouter.get('/en-test', (req, res) => res.send('EN test route works'));
codeRouter.get('/en', codeController.indexEnGet)
codeRouter.get('/', codeController.indexGet)
codeRouter.get('/form', codeController.formGet)
codeRouter.post('/form', codeController.formPost)

module.exports = codeRouter