
const newUser = (req, res) => {
 
    res.json({
        ok:true,
        msg: 'registro'
    })
}

const login = (req, res) => {
 
    res.json({
        ok:true,
        msg: 'login'
    })
}

const tokenRenew = (req, res) => {
 
    res.json({
        ok:true,
        msg: 'tokenRenew'
    })
}

module.exports = {
    newUser,
    login,
    tokenRenew
}