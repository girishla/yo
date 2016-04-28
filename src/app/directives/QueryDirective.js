"use strict";
var QueryController_1 = require("../controllers/QueryController");
var QueryDirective = (function () {
    function QueryDirective() {
        var directive = {};
        directive.restrict = 'A';
        directive.scope = true;
        directive.controller = QueryController_1.QueryController;
        directive.link = function (scope, element, attrs, queryCtrl) {
            scope.$watch(element.attr('eui-query') + " | euiCached", function (val) { return scope.query.query = val; });
            var enabled = false;
            var enabledAttr = element.attr('eui-enabled');
            if (enabledAttr) {
                scope.$watch(enabledAttr, function (val) { return scope.query.enabled = val; });
                enabled = scope.$eval(enabledAttr);
            }
            scope.query = {
                query: scope.$eval(element.attr('eui-query') + " | euiCached"),
                enabled: enabled
            };
            queryCtrl.init();
        };
        return directive;
    }
    return QueryDirective;
}());
exports.QueryDirective = QueryDirective;
