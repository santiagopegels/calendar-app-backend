const Event = require('../models/event')

const getEvents = (req, res) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    })
}

const newEvent = async (req, res) => {

    const event = new Event(req.body)

    try {
        event.user = req.user._id

        const eventDB = await event.save()

        res.json({
            ok: true,
            eventDB
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
    



}

const updateEvent = (req, res) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    })
}

const deleteEvent = (req, res) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    })
}

module.exports = {
    getEvents,
    newEvent,
    updateEvent,
    deleteEvent
}