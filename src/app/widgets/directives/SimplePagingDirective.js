"use strict";
// The widgets show how to create reusable components on top of ElasticUI.
// You can also directly use the directive.template html in your front-end (see docs/widgets.md for more info)
var SimplePagingDirective = (function () {
    function SimplePagingDirective() {
        var directive = {};
        directive.restrict = 'E';
        directive.scope = true;
        directive.template = '\
            <ul class="pager">\
                <li ng-if="indexVM.page <= 1" class="disabled"><a href="">Previous</a></li>\
                <li ng-if="indexVM.page > 1"><a href="" ng-click="indexVM.page=indexVM.page - 1">Previous</a></li>\
                <li ng-if="indexVM.pageCount <= indexVM.page" class="disabled"><a href="">Next</a></li>\
                <li ng-if="indexVM.pageCount > indexVM.page"><a href="" ng-click="indexVM.page=indexVM.page + 1">Next</a></li>\
            </ul>';
        return directive;
    }
    return SimplePagingDirective;
}());
exports.SimplePagingDirective = SimplePagingDirective;
