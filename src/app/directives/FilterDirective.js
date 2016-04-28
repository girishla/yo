"use strict";
var FilterController_1 = require("../controllers/FilterController");
var FilterDirective = (function () {
    function FilterDirective() {
        var directive = {};
        directive.restrict = 'A';
        directive.scope = true;
        directive.controller = FilterController_1.FilterController;
        directive.link = function (scope, element, attrs, filterCtrl) {
            scope.$watch(element.attr('eui-filter') + " | euiCached", function (val) { return scope.filter.filter = val; });
            var enabled = false;
            var enabledAttr = element.attr('eui-enabled');
            if (enabledAttr) {
                scope.$watch(enabledAttr, function (val) { return scope.filter.enabled = val; });
                enabled = scope.$eval(enabledAttr);
            }
            scope.filter = {
                filter: scope.$eval(element.attr('eui-filter') + " | euiCached"),
                enabled: enabled
            };
            filterCtrl.init();
        };
        return directive;
    }
    return FilterDirective;
}());
exports.FilterDirective = FilterDirective;
