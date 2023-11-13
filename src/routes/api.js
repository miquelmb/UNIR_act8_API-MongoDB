const router = require('express').Router();

// Rutas
router.use('/inmuebles', require('./api/inmuebles'));

module.exports = router;