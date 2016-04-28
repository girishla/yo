"use strict";
var InvertedDirective = (function () {
    function InvertedDirective() {
        var directive = {};
        // http://stackoverflow.com/questions/13925462/angularjs-reverse-checkbox-state
        directive.require = 'ngModel';
        directive.link = function (scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (val) { return !val; });
            ngModel.$formatters.push(function (val) { return !val; });
        };
        return directive;
    }
    return InvertedDirective;
}());
exports.InvertedDirective = InvertedDirective;
