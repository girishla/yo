"use strict";
// This filter makes sure the same elastic.js object is returned after every digest.
// This workaround is needed because expressions like ejs.* return a new object every time
var CachedFilter = (function () {
    function CachedFilter() {
        var values = {}; // keys: native elasticsearch json, values: elastic.js object
        return function (input) {
            if (!input) {
                return input;
            }
            var json = angular.toJson(input.toJSON());
            if (!values[json]) {
                values[json] = input;
            }
            return values[json];
        };
    }
    return CachedFilter;
}());
exports.CachedFilter = CachedFilter;
