// Schema fields modeled after CFC application content. Omitted some fields and kept others to our interpretation of our the application we are trying to create.
// Workers will come from both organizations (BoL and CFC) to satisfy the combining of both applications. Some of our endpoints will reference the workers linked with what event and client.
// Code is referenced by Professor Lindner's code example from Module 4 detailing data modeling schemas with mongoose.


const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let workerSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    workerID: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    mobileNum: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
    {
        collection: 'workers'
    });

module.exports = mongoose.model('worker', workerSchema);
