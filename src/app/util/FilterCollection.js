"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EjsCollection_1 = require("./EjsCollection");
var FilterTool_1 = require("./FilterTool");
var FilterCollection = (function (_super) {
    __extends(FilterCollection, _super);
    function FilterCollection() {
        _super.apply(this, arguments);
    }
    FilterCollection.prototype.getAsFilter = function () {
        return FilterTool_1.FilterTool.combineFilters(this.ejsObjects);
    };
    FilterCollection.prototype.getAsORFilter = function () {
        return FilterTool_1.FilterTool.combineFiltersShould(this.ejsObjects);
    };
    FilterCollection.prototype.contains = function (filter) {
        return this.indexOf(filter) > -1;
    };
    return FilterCollection;
}(EjsCollection_1.EjsCollection));
exports.FilterCollection = FilterCollection;
