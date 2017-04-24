var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require ('cors'),
    path = require('path'),
    mysql = require('mysql'),
    app = express();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/api', function(req, res){
    var API = require('../js/api.js'),
        db_host = process.env.DB_HOST,
        db_login = process.env.DB_LOGIN,
        db_password = process.env.DB_PASSWORD;

    console.log(db_host, db_login, db_password);

    var api = new API();

    res.send(api.get(req.query));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});