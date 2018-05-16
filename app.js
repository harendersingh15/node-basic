const http = require('http');
const express = require('express');
let app = express();


const hostname = '127.0.0.1';
const port = 3000;

var server = app.listen(8001, () => {
    console.log('Starting server on 8001');
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

app.get('/firstGet', (request, res) => {
    res.send('hi');
});

app.get('/firstGet1', (request, res) => {
    res.send('hi');
});

app.get('/firstGet2', (request, res) => {
    res.send('hi');
});

app.get('/firstGet3', (request, res) => {
    res.send('hi');
});

app.get('/firstGet4', (request, res) => {
    res.send('hi');
});

app.get('/firstGet5', (request, res) => {
    res.send('hi');
});