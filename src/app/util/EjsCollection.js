"use strict";
var EjsTool_1 = require("./EjsTool");
var EjsCollection = (function () {
    function EjsCollection() {
        this.ejsObjects = [];
        this.jsonObjects = [];
    }
    EjsCollection.prototype.indexOf = function (ejsObject) {
        return this.jsonObjects.indexOf(EjsTool_1.EjsTool.getJsonFromEjsObject(ejsObject));
    };
    EjsCollection.prototype.add = function (ejsObject) {
        var idx = this.indexOf(ejsObject);
        if (idx == -1) {
            this.ejsObjects.push(ejsObject);
            this.jsonObjects.push(EjsTool_1.EjsTool.getJsonFromEjsObject(ejsObject));
        }
    };
    EjsCollection.prototype.remove = function (ejsObject) {
        var idx = this.indexOf(ejsObject);
        if (idx > -1) {
            this.ejsObjects.splice(idx, 1);
            this.jsonObjects.splice(idx, 1);
        }
    };
    return EjsCollection;
}());
exports.EjsCollection = EjsCollection;
