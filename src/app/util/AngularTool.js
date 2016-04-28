"use strict";
// TODO, probably want to move stuff in this util module to services
var AngularTool = (function () {
    function AngularTool() {
    }
    // http://stackoverflow.com/questions/24303408/bind-to-attributes-in-prototypically-inherited-scope
    AngularTool.setupBinding = function ($parse, scope, attrs, attrsToBind) {
        angular.forEach(attrsToBind, function (attrName, key) {
            scope.$watch(attrs[attrName], function (val) {
                if (scope[attrName] != val) {
                    scope[attrName] = val;
                }
            });
            scope[attrName] = $parse(attrs[attrName])(scope);
        });
    };
    return AngularTool;
}());
exports.AngularTool = AngularTool;
