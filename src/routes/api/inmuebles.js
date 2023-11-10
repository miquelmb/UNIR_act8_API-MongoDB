const router = require('express').Router();
const InmueblesController = require('../../controllers/inmuebles.controller');
const { checkInmuebleId } = require('../../middlewares/inmuebles.middleware');

// Peticiones CRUD
router.get('/', InmueblesController.getInmuebles);
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:inmuebleId', checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;