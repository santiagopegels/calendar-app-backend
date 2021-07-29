const { Router } = require('express')
const router = Router()
const { validateJWT } = require('../middlewares/validate-jwt')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validate-field')
const {isDate} = require('../helpers/isDate')


const { getEvents, newEvent, updateEvent, deleteEvent } = require('../controllers/events')

//Validate all routes with JWT
router.use(validateJWT)

router.get('/', getEvents)

router.post('/',
    [
        check('title', 'El título es requerido').notEmpty(),
        check('start', 'La fecha de comienzo es requerida').custom(isDate),
        check('end', 'La fecha fin es requerida').custom(isDate),

        validateFields
    ]
    , newEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router