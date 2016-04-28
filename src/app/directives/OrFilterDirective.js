"use strict";
var OrFilterController_1 = require("../controllers/OrFilterController");
var OrFilterDirective = (function () {
    function OrFilterDirective() {
        var directive = {};
        directive.restrict = 'EAC';
        directive.scope = true;
        directive.controller = OrFilterController_1.OrFilterController;
        directive.link = function (scope, element, attrs, filterCtrl) {
        };
        return directive;
    }
    return OrFilterDirective;
}());
exports.OrFilterDirective = OrFilterDirective;
