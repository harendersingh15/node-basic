const express = require('express');
const personRoutes = express.Router();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const personSchema = new Schema({
    name: String
});

const PersonModel = mongoose.model('person', personSchema, 'person');

personRoutes.post('/person', (req, res) => {
    console.log('came here');
    var o = {
        'name': req.body.name
    }
    var person = new PersonModel(o);
    person.save((err, p) => {
        res.send(p);
    });

});

module.exports = personRoutes;