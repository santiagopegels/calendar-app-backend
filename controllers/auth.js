const User = require('../models/user')

const newUser = async (req, res) => {

    try {
        const user = new User(req.body)

        await user.save()

        res.status(201).json({
            ok: true,
            msg: 'registro',
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const login = (req, res) => {

    const { email, password } = req.body

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