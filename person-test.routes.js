const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: Number,
    mobileNumber: String
});

const PersonModel = mongoose.model('student', personSchema, 'student');

module.exports = PersonModel;