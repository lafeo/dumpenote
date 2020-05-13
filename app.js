
const fs = require('fs')
const express = require('express');
const functions = require('./functions.js');
const app = express();
app.listen(420, () => console.log('Listening at 420'));
app.use(express.static('public'))
app.use(express.json('1mb'))
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});

app.post('/api', (request, response) => {
    const k = {
        title: functions.loadBook()
    }
    console.log('i got a request');
    console.log(request.body);//now we get the stuff the user has entered
    functions.parser(request.body);
    response.send(k)
});