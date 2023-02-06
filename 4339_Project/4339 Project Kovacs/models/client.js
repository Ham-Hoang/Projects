// Schema is referenced by the two applications given to us (BoL + CFC code). Some fields were kept while others were omitted for simplicity and to contain relevant information to our app.
// Schema layout referenced by Professor Linder's Module 4 Video Recordings and Code references.
// events field included in order to link together client data for aggregation endpoints seen in our API endpoints.

const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    birthday: {
        type: String
    },
    ssn: {
        type: Number
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    familyID: {
        type: Number
    },
    events: 
      [{type: String, ref: 'event'}]
}, {
    collection: 'clients'
});

module.exports = mongoose.model('client', clientSchema)
