
const newUser = (req, res) => {

    const { name, email, password } = req.body

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