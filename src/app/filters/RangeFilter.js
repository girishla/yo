"use strict";
var RangeFilter = (function () {
    function RangeFilter() {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++) {
                input.push(i);
            }
            return input;
        };
    }
    return RangeFilter;
}());
exports.RangeFilter = RangeFilter;
