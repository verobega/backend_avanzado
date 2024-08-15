const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    texto: {
        type: String,
        required: [true, 'Por favor teclea un texto para la tarea']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)