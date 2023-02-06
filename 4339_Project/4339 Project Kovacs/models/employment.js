// employment schema referenced by the two applications provided to us. Majority of fields taken out to accomadate relevant info based on our interpretation while keeping some to facilitate link with other schemas.
// Schema is referenced by the code template provided by Professor Lindner in Module 4 Video Recording/Code doc.


const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employmentSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true
    },
    familyID: {
        type: Number,
        required: true
    },
    workStatus: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    yearlyInc: {
        type: Number,
        required: true
    }
},
    {
        collection: 'employments'
    });

module.exports = mongoose.model('employment', employmentSchema);
