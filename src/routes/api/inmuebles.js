const router = require('express').Router();
const InmueblesController = require('../../controllers/inmuebles.controller');
// TODO: add middlewares
// const { checkProductId } = require('../../middlewares/products.middleware');

router.get('/', InmueblesController.getInmuebles);
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', InmueblesController.updateInmueble);
router.delete('/:inmuebleId', InmueblesController.deleteInmueble);

module.exports = router;