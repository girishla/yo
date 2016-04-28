"use strict";
var AggregationController_1 = require("../controllers/AggregationController");
var AggregationDirective = (function () {
    function AggregationDirective() {
        var directive = {};
        directive.restrict = 'EAC';
        directive.scope = true;
        directive.controller = AggregationController_1.AggregationController;
        directive.link = function (scope, element, attrs, aggCtrl) {
            scope.$watch(element.attr('eui-aggregation') + " | euiCached", function (val) { return scope.aggregation.agg = val; });
            var filterSelf = true;
            var filterSelfAttr = element.attr('eui-filter-self');
            if (filterSelfAttr) {
                scope.$watch(filterSelfAttr, function (val) { return scope.aggregation.filterSelf = val; });
                filterSelf = scope.$eval(filterSelfAttr);
            }
            scope.aggregation = {
                agg: scope.$eval(element.attr('eui-aggregation') + " | euiCached"),
                filterSelf: filterSelf
            };
            aggCtrl.init();
        };
        return directive;
    }
    return AggregationDirective;
}());
exports.AggregationDirective = AggregationDirective;
