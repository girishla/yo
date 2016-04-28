"use strict";
var AngularTool_1 = require("../../util/AngularTool");
var directives_1 = require("./directives");
// The widgets show how to create reusable components on top of ElasticUI.
// You can also directly use the directive.template html in your front-end (see docs/widgets.md for more info)
var ChecklistDirective = (function () {
    function ChecklistDirective($parse) {
        var directive = {};
        directive.restrict = 'E';
        directive.scope = true;
        directive.link = {
            'pre': function (scope, element, attrs) {
                AngularTool_1.AngularTool.setupBinding($parse, scope, attrs, ["field", "size"]);
                scope.agg_name = scope.field.replace(/[^a-z_0-9]/gmi, "_") + "_" + (directives_1.Widgets.default_agg_count++);
            }
        };
        // TODO: make sure checked boxes are always at top
        directive.template = '\
            <ul class="nav nav-list" eui-aggregation="ejs.TermsAggregation(agg_name).field(field).size(size)">\
                <li ng-repeat="bucket in aggResult.buckets">\
                    <label class="checkbox" eui-filter="ejs.TermsFilter(field, bucket.key)">\
                        <input type="checkbox" ng-model="filter.enabled">\
                        {{bucket.key}} ({{bucket.doc_count}})\
                    </label>\
                </li>\
            </ul>';
        return directive;
    }
    ChecklistDirective.$inject = ['$parse'];
    return ChecklistDirective;
}());
exports.ChecklistDirective = ChecklistDirective;
