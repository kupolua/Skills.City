var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require ('cors'),
    path = require('path'),
    mysql = require('mysql'),
    app = express();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/api', function(req, res){

    var Login = require('../js/api.js');
    var login = new Login();
    var respBody = req.query;

    login.get(respBody, function(response) {
        res.json(response);
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});