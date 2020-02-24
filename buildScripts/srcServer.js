var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.use('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log('Server running in port ' + port);
        open('http://localhost:' + port);
    }
});