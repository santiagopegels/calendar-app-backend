const Event = require('../models/event')

const getEvents = async (req, res) => {

    const events = await Event.find().populate('user', 'name')

    res.json({
        ok: true,
        events
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
            msg: 'Error'
        })
    }
}

const updateEvent = async (req, res) => {

    const eventId = req.params.id
    const uid = req.uid

    try {
        const event = await Event.findById(eventId)

        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'El Evento no existe'
            })
        }

        if(event.user.toString() !== uid){
            return  res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para editar este evento'
            })
        }

        const updatedEvent = {
            ...req.body,
            user: uid
        }

        const updatedEventDB = await Event.findByIdAndUpdate(eventId,updatedEvent, {new: true})

        res.json({
            ok: true,
            event: updatedEventDB
        })

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            ok: true,
            msg: 'Error'
        })
    }
}

const deleteEvent = async (req, res) => {

    const eventId = req.params.id
    const uid = req.uid

    try {
        const event = await Event.findById(eventId)

        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'El Evento no existe'
            })
        }

        if(event.user.toString() !== uid){
            return  res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para eliminar este evento'
            })
        }

        await Event.findByIdAndDelete(eventId)

        res.json({
            ok: true,
            msg: 'Evento eliminado'
        })

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }
}

module.exports = {
    getEvents,
    newEvent,
    updateEvent,
    deleteEvent
}