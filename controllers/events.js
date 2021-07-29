

const getEvents = (req, res) => {
    res.json({
        ok: true,
        msg: 'getEvents'
    })
}

const newEvent = (req, res) => {
    console.log(req.body);
    


    res.json({
        ok: true,
        msg: 'getEvents'
    })
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