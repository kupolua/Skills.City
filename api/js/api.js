"use strict";

var fs = require('fs'),
    path = require('path'),
    md5 = require('js-md5'),
    mysql = require('mysql'),
    db_host = process.env.DB_HOST,
    db_login = process.env.DB_LOGIN,
    db_password = process.env.DB_PASSWORD,
    db_name = process.env.DB_NAME,
    connection = mysql.createConnection({
        host     : db_host,
        database : db_name,
        user     : db_login,
        password : db_password
    });

function PaperGerberaTemplateBuilder() {

    return {
        get: function (reqQuery) {

            var responseData = {
                id: "id",
                login: "login",
                db_host: db_host,
                db_login: db_login,
                db_password: db_password,
                db_name: db_name,
                reqQuery: reqQuery,
                dbResponse: ''
            };

            connection.query('SELECT * FROM users', function(error, results, fields){
                if (error) throw error;

                responseData.dbResponse = results[0];
            });

            return responseData;
        }
    };
}

module.exports = PaperGerberaTemplateBuilder;