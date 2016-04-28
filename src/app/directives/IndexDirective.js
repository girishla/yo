"use strict";
var IndexController_1 = require("../controllers/IndexController");
var IndexDirective = (function () {
    function IndexDirective() {
        var directive = {};
        directive.restrict = 'EAC';
        directive.scope = false;
        directive.controller = IndexController_1.IndexController;
        directive.link = function (scope, element, attrs, indexCtrl) {
            scope.$watch(attrs.euiIndex, function (val) {
                indexCtrl.indexVM.index = val;
            });
            indexCtrl.indexVM.index = scope.$eval(attrs.euiIndex);
        };
        return directive;
    }
    return IndexDirective;
}());
exports.IndexDirective = IndexDirective;
