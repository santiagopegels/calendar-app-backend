const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')

const { newUser, login, tokenRenew } = require('../controllers/auth')

router.post('/register',
    [
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener 6 caracteres').isLength({ min: 6 })
    ],
    newUser)

router.post('/login',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener 6 caracteres').isLength({ min: 6 })
    ],
    login)

router.get('/renew', tokenRenew)

module.exports = router;