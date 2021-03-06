const mngoose = require("mongoose")
const eventSchema = new mngoose.Schema({
    title:{
    type: String,
    required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    user_id: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        required: true
    },

    eveImg: {
        type: String,
        required: true

    }
})

let Event = mngoose.model('Event', eventSchema, 'events');

module.exports = Event;