const { validationResult } = require('express-validator')

const newUser = (req, res) => {

    const { name, email, password } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const login = (req, res) => {

    const { email, password } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(200).json({
        ok: true,
        msg: 'login'
    })
    
}

const tokenRenew = (req, res) => {

    res.json({
        ok: true,
        msg: 'tokenRenew'
    })
}

module.exports = {
    newUser,
    login,
    tokenRenew
}