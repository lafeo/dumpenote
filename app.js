
const fs = require('fs')
const express = require('express');
const functions = require('./functions.js');
const app = express();

app.listen(PORT, () => console.log('Listening at PORT'));
app.use(express.static('public'))
app.use(express.json('1mb'))



app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});
var exceptionString = 'none';
app.post('/data', (request, response) => {
    const k = {
        title: functions.loadBook()
    }
    console.log('i got a request from data');;//now we get the stuff the user has entered
    response.send(k)
});


app.post('/api', (request, response) => {
    
    const k = {
        title: exceptionString,
    }
    console.log('i got a request');
    console.log(request.body);//now we get the stuff the user has entered
    functions.parser(request.body);
    response.send(k)
});
module.exports = {
    exceptionString: exceptionString

}
