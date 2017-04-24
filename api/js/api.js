"use strict";

function PaperGerberaTemplateBuilder() {
    var fs = require('fs'),
        path = require('path'),
        md5 = require('js-md5'),
        db_host = process.env.DB_HOST,
        db_login = process.env.DB_LOGIN,
        db_password = process.env.DB_PASSWORD;

    console.log(db_host, db_login, db_password);

    return {
        get: function (reqQuery) {

            var responseData = {
                id: "id",
                login: "login",
                passwd: "passwd",
                reqQuery: reqQuery
            };

            return responseData;
        }
    };
}

module.exports = PaperGerberaTemplateBuilder;