"use strict";
var FilterTool_1 = require("../util/FilterTool");
var EjsTool_1 = require("../util/EjsTool");
var AggregationController = (function () {
    function AggregationController($scope) {
        this.scope = $scope;
    }
    AggregationController.prototype.init = function () {
        var _this = this;
        this.scope.$parent.$watch('indexVM.results', function () { return _this.updateResults(); });
        this.scope.$watch('aggregation.agg', function (newVal, oldVal) {
            if (!EjsTool_1.EjsTool.equals(oldVal, newVal)) {
                if (_this.previousProvider) {
                    _this.scope.indexVM.aggregationProviders.remove(_this.previousProvider);
                }
                _this.updateAgg();
            }
        });
        this.scope.$watch('aggregation.filterSelf', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                if (_this.previousProvider) {
                    _this.scope.indexVM.aggregationProviders.remove(_this.previousProvider);
                }
                _this.updateAgg();
            }
        });
        this.scope.$on('$destroy', function () {
            if (_this.previousProvider) {
                _this.scope.indexVM.aggregationProviders.remove(_this.previousProvider);
            }
        });
        this.updateAgg();
    };
    AggregationController.prototype.updateResults = function () {
        var res = this.scope.indexVM.results;
        if (this.scope.aggregation.agg && res && res.aggregations) {
            var name = AggregationController.getAggName(this.scope.aggregation.agg);
            var aggKey = Object.keys(res.aggregations).filter(function (key) { return key == name || key == "filtered_" + name; })[0];
            var agg = res.aggregations[aggKey];
            if (aggKey == "filtered_" + name) {
                agg = agg[name];
            }
            this.scope.aggResult = agg;
        }
    };
    AggregationController.prototype.updateAgg = function () {
        var _this = this;
        var provider = null;
        if (this.scope.aggregation.agg) {
            provider = function (filters) { return _this.getAggregation(filters); };
        }
        if (provider) {
            this.scope.indexVM.aggregationProviders.add(provider);
        }
        this.previousProvider = provider;
    };
    AggregationController.getAggName = function (ejsAggregation) {
        return Object.keys(ejsAggregation.toJSON())[0];
    };
    AggregationController.prototype.getAggregationExplicit = function (ejsAggregation, filterSelf, filters) {
        var _this = this;
        if (!ejsAggregation) {
            return null;
        }
        var facetFilters = filters;
        if (!filterSelf) {
            facetFilters = facetFilters.filter(function (val) { return val != _this.scope.combinedFilter && (typeof val.field === "undefined" || val.field() != ejsAggregation.field()); });
        }
        var combinedFilters = FilterTool_1.FilterTool.combineFilters(facetFilters);
        if (combinedFilters != null) {
            ejsAggregation = new ejs.FilterAggregation("filtered_" + AggregationController.getAggName(ejsAggregation)).filter(combinedFilters).agg(ejsAggregation);
        }
        return ejsAggregation;
    };
    AggregationController.prototype.getAggregation = function (filters) {
        return this.getAggregationExplicit(this.scope.aggregation.agg, this.scope.aggregation.filterSelf, filters);
    };
    AggregationController.$inject = ['$scope'];
    return AggregationController;
}());
exports.AggregationController = AggregationController;
