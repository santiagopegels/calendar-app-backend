const {Router} = require('express')
const router = Router()

const {newUser, login, tokenRenew} = require('../controllers/auth')

router.post('/register', newUser)

router.post('/login', login)

router.get('/renew', tokenRenew)

module.exports = router;