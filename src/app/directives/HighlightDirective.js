"use strict";
var HighlightController_1 = require("../controllers/HighlightController");
var HighlightDirective = (function () {
    function HighlightDirective() {
        var directive = {};
        directive.restrict = 'A';
        directive.scope = true;
        directive.controller = HighlightController_1.HighlightController;
        directive.link = function (scope, element, attrs, highlightCtrl) {
            scope.$watch(element.attr('eui-highlight') + " | euiCached", function (val) { return scope.highlighting.highlight = val; });
            var enabled = false;
            var enabledAttr = element.attr('eui-enabled');
            if (enabledAttr) {
                scope.$watch(enabledAttr, function (val) { return scope.highlighting.enabled = val; });
                enabled = scope.$eval(enabledAttr);
            }
            scope.highlighting = {
                highlight: scope.$eval(element.attr('eui-highlight') + " | euiCached"),
                enabled: enabled
            };
            highlightCtrl.init();
        };
        return directive;
    }
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
