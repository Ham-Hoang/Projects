// Schema referenced mainly by CFC code provided to us. Condensed the fields to only take in main information about the client's family personal info.
// Schema is modeled after Professor Lindner's Module 4 Example explaining schema modeling.


const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let familySchema = new Schema({
    _id:{
        type: String,
        required: true
    },
    clientID: {
        type: Number,
        required: true
    },
    familyID: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required: true
    },
    Age:{
        type: Number,
        required: true
    }
},
    {
    collection: 'family'
});

module.exports = mongoose.model('family', familySchema)
