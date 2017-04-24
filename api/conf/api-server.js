var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require ('cors'),
    path = require('path'),
    mysql = require('mysql'),
    app = express();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/api', function(req, res){
    var API = require('../js/api.js');

    var api = new API();

    res.send(api.get(req.query));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});