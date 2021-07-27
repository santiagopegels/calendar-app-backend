const User = require('../models/user')

const newUser = async (req, res) => {

    const {email} = req.body

    try {

        let user = await User.findOne({email})
        console.log(user)

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo'
            })
        }

        user = new User(req.body)

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