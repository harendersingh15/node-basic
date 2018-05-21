const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
//Import the mongoose module
const mongoose = require('mongoose');
const personRoutes = require('./person-routes');
const PersonTestRoutes = require('./person-test.routes');



let app = express();
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//routes
app.use(personRoutes);

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/personDB';
mongoose.connect(mongoDB, () => {

    var server = app.listen(8001, () => {
        console.log('Starting server on 8001');
    });

});


app.post('/createPerson', (req, res) => {

    const person = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        mobileNumber: req.body.mobileNumber
    }

    const p = new PersonTestRoutes(person);

    p.save((error, result) => {
        if (error) {
            return res.status(500).send(error);
        }

        res.send('ok got inserted!!!');
    });
});


app.post('/getPersons', (req, res) => {


    PersonTestRoutes.find({
        'firstName': 'harender'
    }).lean().exec((err, result) => {
        res.send(result);
    });
})


app.all('/test1/:id', function(req, res, next) {
    console.log('Accessing the secret section ...test');
    next() // pass control to the next handler
});


app.use(function(req, res, next) {
    console.log('Time: %d', Date.now());
    next();
});

app.post('/wrireFile', (req, res) => {

    test((err, data) => {
            res.send('hi');
        })
        // fs.writeFileSync('demo.txt', req.body.data, (err) => {
        //     if (err) {
        //         return res.send(err);
        //     }
        //     console.log('file written done ');
        //     res.send('Write successfuly!!!!');
        // });

    console.log('program ends here');
});

app.get('/readFile/', (req, res) => {
    fs.readFile('demo.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());

        res.send("Asynchronous read: " + data.toString());
    });

    console.log("Program Ended");
});


app.get('/readFile', (req, res) => {
    var data = fs.readFile('demo.txt');
    console.log("Synchronous read: " + data.toString());
    console.log("Program Ended");
    res.send("Asynchronous read: " + data.toString());
});



app.get('/readFileSync', (req, res) => {
    var data = fs.readFileSync('demo.txt');
    console.log("Synchronous read: " + data.toString());
    console.log("Program Ended");
    res.send("Sync read: " + data.toString());
});



app.get('/test1/:id/:anotherID/:id', (req, res) => {
    console.log('one')
    res.send('one')
});


app.get('/test1/:id/:id', (req, res) => {
    console.log('two')
    res.send('two');


});


app.get('/test1/:id', (req, res) => {
    console.log(req.body);
    console.log('two')
    res.send('two');
});


app.get('/test1/:id/:id/:id', (req, res) => {
    console.log('three')
    res.send('three');
});



app.delete('/test1/:id', (req, res) => {
    console.log('three')
    res.send('three');
});