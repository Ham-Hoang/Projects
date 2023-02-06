// Schema referenced mainly by the CFC code example provided to us. Condensed majority of fields and only put down relevant information that encompasses main aspects of a client's education background.
// Schema referenced by Professor Lindner's Module 4 Example in creaing schema models



const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let educationSchema = new Schema({
    clientID: {
        type: Number,
        unique: true
    },
    School: {
        type: String
    },
    degree: {
        type: String
    },
    certification: {
        type: String
    },
    diploma: {
        type: String,
    }  
}, {
    collection: 'Education'
});

module.exports = mongoose.model('education', educationSchema)
