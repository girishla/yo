"use strict";
var PageRangeFilter = (function () {
    function PageRangeFilter() {
        return function (input, total, current, neighbours) {
            if (neighbours === void 0) { neighbours = 5; }
            // TODO: remove hardcoded numbers
            // TODO: remove for loop
            for (var i = 1; i <= total; i++) {
                if (i <= current + neighbours && i >= current - neighbours
                    || (i < current && current - neighbours < 4)
                    || (i > current + neighbours && total - (current + neighbours) < 4)) {
                    input.push(i);
                }
                else if (i == 1) {
                    input.push(1, -1);
                }
                else if (i == total) {
                    input.push(-2, total);
                }
            }
            return input;
        };
    }
    return PageRangeFilter;
}());
exports.PageRangeFilter = PageRangeFilter;
