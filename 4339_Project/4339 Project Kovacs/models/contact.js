//Schema is mainly referenced by the CFC application contact model. Consolidated some of the fields and kept those that are relevant to client residency and communication reasons
// Schema referenced by Professor Lindner's code template in Module 4 in creating schema models.


const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    clientID: {
        type: Number, 
        required: true
    },
    mobileNUM:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    }
},
    {
    collection: 'contact'
});

module.exports = mongoose.model('contact', contactSchema)
