const express = require('express');
const router = express.Router()
const controller = require('../controllers/urserControllers')

router.post('/cadastro', controller.cadastro)
router.post('/login', controller.login)
router.post('/academias', controller.academias);
router.get('/academias', controller.mostraAcad);

module.exports = router;
