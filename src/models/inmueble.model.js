const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    piso: Number,
    letra: String,
    // extension como number para poder realizar operaciones como realizar la media, etc.
    extension_m2: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_contacto: String,
}, {
    versionKey: false,
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
        }
    }
});

// si a model le pasamos dos parametros, relacionamos colección con schema. Ponemos product, pero la colección se llamará products.
module.exports = model('inmueble', productSchema);