"use strict";
// should not be used (for development purposes atm)
var VarDirective = (function () {
    function VarDirective($timeout) {
        var directive = {};
        directive.restrict = 'EAC';
        directive.scope = false;
        directive.transclude = false;
        directive.link = {
            pre: function (scope, element, attrs) {
                var key = element.attr('eui-key');
                scope.$watch(element.attr('eui-value'), function (newVal, oldVal) {
                    if (!angular.equals(newVal, oldVal)) {
                        scope[key] = newVal;
                    }
                }, true);
                scope[key] = scope.$eval(element.attr('eui-value'));
            }
        };
        return directive;
    }
    VarDirective.$inject = ['$timeout'];
    return VarDirective;
}());
exports.VarDirective = VarDirective;
