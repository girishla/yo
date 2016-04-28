"use strict";
var FilterTool = (function () {
    function FilterTool() {
    }
    FilterTool.combineFilters = function (filters) {
        if (filters.length === 1) {
            return filters[0];
        }
        else if (filters.length > 1) {
            return ejs.BoolFilter().must(filters);
        }
        return null;
    };
    FilterTool.combineFiltersShould = function (filters) {
        if (filters.length === 1) {
            return filters[0];
        }
        else if (filters.length > 1) {
            return ejs.BoolFilter().should(filters);
        }
        return null;
    };
    return FilterTool;
}());
exports.FilterTool = FilterTool;
