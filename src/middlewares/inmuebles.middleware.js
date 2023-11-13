const mongoose = require('mongoose');
const InmuebleModel = require('../models/inmueble.model');

// Funcion para manejar respuestas de error
const errorHandler = (res, errorMessage) => {
    return res.json({ fatal: errorMessage });
};

// Funcion para validar y encontrar el id especificado en la bbdd
const checkInmuebleId = async (req, res, next) => {
    const { inmuebleId } = req.params;

    // Validar si inmuebleId es un formato de id correcto en mongoDB
    if (!mongoose.Types.ObjectId.isValid(inmuebleId)) {
        return errorHandler(res, 'El formato del id del inmueble no es válido');
    };

    // Comprobar si el inmuebleId existe en la bbdd para actualizarlo
    try {
        const inmueble = await InmuebleModel.findById(inmuebleId);
        if (!inmueble) {
            return errorHandler(res, 'El inmueble indicado no existe en nuestra base de datos');
        }
        next();
    } catch (error) {
        return errorHandler(res, error.message);
    };
};

module.exports = { checkInmuebleId };
