const { Router } = require('express')
const router = Router()
const { validateJWT } = require('../middlewares/validate-jwt')

const {getEvents, newEvent, updateEvent, deleteEvent} = require('../controllers/events')

//Validate all routes with JWT
router.use(validateJWT)

router.get('/', getEvents)

router.post('/', newEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router