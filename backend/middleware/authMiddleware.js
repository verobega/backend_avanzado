const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {

    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //obtener el token
            token = req.headers.authorization.split(' ')[1]

            //verificar token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //obtener los datos del usuario logeado desde el token  
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            res.status(401)
            throw new Error('Acceso no Autorizado')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Acceso no autorizado, no se porporciono un token')
    }
})

module.exports = {
    protect
}