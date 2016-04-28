"use strict";
// utility filter returning a tuple [_1, _2] of an elasticsearch bucket, useful for passing data to chart libraries
// _1 is set to the key
// _2 is based on property parameter you can supply an object path(e.g.: "nested.property")
// for example if you have buckets [{"key":"italy","doc_count":301}]
// you can pass "doc_count" as property and it will return [["italy", 301]]
var MapFilter = (function () {
    function MapFilter() {
        return function (input, property) {
            var ret = [];
            if (!input || !input.length) {
                return input;
            }
            var arr = MapFilter.parseString(property);
            return input.map(function (el) { return [el.key, MapFilter.getValue(el, arr)]; });
        };
    }
    MapFilter.parseString = function (input) {
        return input.split(".");
    };
    MapFilter.getValue = function (element, propertyArray) {
        var value = element;
        angular.forEach(propertyArray, function (property) {
            if (!value) {
                return value;
            }
            value = value[property];
        });
        return value;
    };
    return MapFilter;
}());
exports.MapFilter = MapFilter;
