"use strict";
var HostController_1 = require("../controllers/HostController");
var HostDirective = (function () {
    function HostDirective() {
        var directive = {};
        directive.restrict = 'A';
        directive.scope = true;
        directive.controller = HostController_1.HostController;
        directive.link = function (scope, element, attrs, hostCtrl) {
            scope.$watch(element.attr('eui-host'), function (val) { return scope.host = val; });
            scope.host = scope.$eval(element.attr('eui-host'));
            hostCtrl.init();
        };
        return directive;
    }
    return HostDirective;
}());
exports.HostDirective = HostDirective;
