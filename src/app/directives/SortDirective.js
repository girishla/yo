"use strict";
var SortController_1 = require("../controllers/SortController");
var SortDirective = (function () {
    function SortDirective() {
        var directive = {};
        directive.restrict = 'A';
        directive.scope = true;
        directive.controller = SortController_1.SortController;
        directive.link = function (scope, element, attrs, sortCtrl) {
            scope.$watch(element.attr('eui-sort') + " | euiCached", function (val) { return scope.sorting.sort = val; });
            var enabled = false;
            var enabledAttr = element.attr('eui-enabled');
            if (enabledAttr) {
                scope.$watch(enabledAttr, function (val) { return scope.sorting.enabled = val; });
                enabled = scope.$eval(enabledAttr);
            }
            scope.sorting = {
                sort: scope.$eval(element.attr('eui-sort') + " | euiCached"),
                enabled: enabled
            };
            sortCtrl.init();
        };
        return directive;
    }
    return SortDirective;
}());
exports.SortDirective = SortDirective;
