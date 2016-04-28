"use strict";
var AggregationDirective_1 = require("./AggregationDirective");
var FilterDirective_1 = require("./FilterDirective");
var HighlightDirective_1 = require("./HighlightDirective");
var HostDirective_1 = require("./HostDirective");
var IndexDirective_1 = require("./IndexDirective");
var InvertedDirective_1 = require("./InvertedDirective");
var OrFilterDirective_1 = require("./OrFilterDirective");
var QueryDirective_1 = require("./QueryDirective");
var SortDirective_1 = require("./SortDirective");
var VarDirective_1 = require("./VarDirective");
var ChecklistDirective_1 = require("../widgets/directives/ChecklistDirective");
var SearchboxDirective_1 = require("../widgets/directives/SearchboxDirective");
var SingleselectDirective_1 = require("../widgets/directives/SingleselectDirective");
var SimplePagingDirective_1 = require("../widgets/directives/SimplePagingDirective");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('elasticui.directives', [])
    .directive('euiAggregation', [AggregationDirective_1.AggregationDirective])
    .directive('euiFilter', [FilterDirective_1.FilterDirective])
    .directive('euiHighlight', [HighlightDirective_1.HighlightDirective])
    .directive('euiHost', [HostDirective_1.HostDirective])
    .directive('euiIndex', [IndexDirective_1.IndexDirective])
    .directive('euiInverted', [InvertedDirective_1.InvertedDirective])
    .directive('euiOrFilter', [OrFilterDirective_1.OrFilterDirective])
    .directive('euiQuery', [QueryDirective_1.QueryDirective])
    .directive('euiSort', [SortDirective_1.SortDirective])
    .directive('euiVar', [VarDirective_1.VarDirective])
    .directive('euiChecklist', [ChecklistDirective_1.ChecklistDirective])
    .directive('euiSearchbox', [SearchboxDirective_1.SearchboxDirective])
    .directive('euiSingleselect', [SingleselectDirective_1.SingleselectDirective])
    .directive('euiSimplePaging', [SimplePagingDirective_1.SimplePagingDirective]);
;
