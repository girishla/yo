"use strict";
var TimestampFilter = (function () {
    function TimestampFilter() {
        return function (input) {
            return new Date(input).getTime();
        };
    }
    return TimestampFilter;
}());
exports.TimestampFilter = TimestampFilter;
