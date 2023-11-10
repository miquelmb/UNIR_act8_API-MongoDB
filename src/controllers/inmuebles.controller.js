const InmuebleModel = require('../models/inmueble.model');

const getInmuebles = async (req, res) => {
    try {
        const products = await InmuebleModel.find();
        res.json(products);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const createInmueble = async (req, res) => {
    try {
        const result = await InmuebleModel.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const updateInmueble = async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const result = await InmuebleModel.findByIdAndUpdate(inmuebleId, req.body, { new: true });
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const deleteInmueble = async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const result = await InmuebleModel.findByIdAndDelete(inmuebleId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

module.exports = { getInmuebles, createInmueble, updateInmueble, deleteInmueble};