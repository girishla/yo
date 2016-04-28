"use strict";
// The widgets show how to create reusable components on top of ElasticUI.
// You can also directly use the directive.template html in your front-end (see docs/widgets.md for more info)
var AngularTool_1 = require("../../util/AngularTool");
var SearchboxDirective = (function () {
    function SearchboxDirective($parse, $scope) {
        console.log($scope);
        var directive = {};
        directive.restrict = 'E';
        directive.scope = true;
        directive.link = {
            'pre': function (scope, element, attrs) {
                AngularTool_1.AngularTool.setupBinding($parse, scope, attrs, ["field"]);
            }
        };
        // TODO: should be debounced
        directive.template = '\
            <input type="text" eui-query="ejs.MatchQuery(field, querystring)" ng-model="querystring" eui-enabled="querystring.length" />\
            ';
        return directive;
    }
    SearchboxDirective.$inject = ['$parse', '$scope'];
    return SearchboxDirective;
}());
exports.SearchboxDirective = SearchboxDirective;
