const User = require('../models/user')
const bcrypt = require('bcryptjs')
const {generateJWT} = require('../helpers/generateJWT')

const newUser = async (req, res) => {

    const { email, password } = req.body

    try {

        let user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo'
            })
        }

        user = new User(req.body)

        //Encrypt password
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        res.status(201).json({
            ok: true,
            user
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const login = async (req, res) => {

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Compruebe usuario o contraseña'
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Correo o password incorrecto'
            })
        }

        const token = await generateJWT(user.id, user.name)

        res.json({
            ok: true,
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const tokenRenew = async (req, res) => {

    const {user} = req

    const token = await generateJWT(user.id, user.name)


    res.json({
        ok: true,
        token
    })
}

module.exports = {
    newUser,
    login,
    tokenRenew
}