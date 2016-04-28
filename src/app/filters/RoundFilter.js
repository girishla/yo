"use strict";
var RoundFilter = (function () {
    function RoundFilter() {
        return function (input) {
            if (!input) {
                return input;
            }
            return Math.round(input);
        };
    }
    return RoundFilter;
}());
exports.RoundFilter = RoundFilter;
