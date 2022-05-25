const mongoose = require('mongoose')

const CatSchema = new mongoose.Schema(
    {
        Nombre: {
            type: String,
        },
        Raza: {
            type: String
        },
        Edad: {
            type: Number
        },
        Foto: {
            type: String,
            default: 'https://cdn2.thecatapi.com/images/17q.jpg'
        }
    },
    {
        versionKey: false,
        timestamps: false
    }
)

module.exports = mongoose.model('gato', CatSchema)