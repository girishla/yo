"use strict";
var EjsTool = (function () {
    function EjsTool() {
    }
    EjsTool.getJsonFromEjsObject = function (object) {
        return angular.toJson(object.toJSON());
    };
    EjsTool.equals = function (objectA, objectB) {
        return !objectA && !objectB || (objectA && objectB && this.getJsonFromEjsObject(objectA) == this.getJsonFromEjsObject(objectB));
    };
    return EjsTool;
}());
exports.EjsTool = EjsTool;
