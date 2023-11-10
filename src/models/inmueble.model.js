const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    piso: Number,
    letra: String,
    // extension como number para poder realizar operaciones como realizar la media de superfície de todos los inmuebles, etc.
    extension_m2: {type: Number, required: [true, 'información sobre la extensión es obligatoria']},
    numero_habitaciones: { type: Number, min: [1, 'el número de habitaciones debe ser mayor que 0'], required: [true, 'información sobre el número de habitaciones es obligatoria']}, 
    alquilado: {type: Boolean, required: [true, 'información sobre si está alquilado o no es obligatoria']},
    nombre_propietario: {type: String, required: [true, 'información sobre el propietario/a es obligatoria']},
    mail_contacto: {type: String, required: [true, 'mail de contacto del propietario/a es obligatorio']}
}, {
    versionKey: false,
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id; // eliminar el id duplicado
        }
    }
});

module.exports = model('inmueble', productSchema);