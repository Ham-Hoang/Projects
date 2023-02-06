// Schema fields referenced by prior semester's code. Entire Schema represents all events provided by both BoL and CFC to satisfy the combining of both applications into one.
// Schema referenced by following Module 4 code references provided by Professor Linder
// clients field is added in order to link together with Events for aggregation endpoints.


const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let eventSchema = new Schema ({
    _id: {
        type: String,
        default: uuid.v1
    },
    eventID: {
        type: Number
    },
    workerID: {
        type: Number
    },
    org: {
        type: String
    },
    eventDesc: {
        type: String    
    },
    eventAddress: {
        type: String
    },
    clients: 
    [{type: String, ref: 'client'}]
}, {
    collection: 'events'
});


module.exports = mongoose.model('event', eventSchema)
