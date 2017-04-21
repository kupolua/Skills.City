"use strict";

function PaperGerberaTemplateBuilder() {
    var fs = require('fs'),
        path = require('path'),
        md5 = require('js-md5');

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