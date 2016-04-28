"use strict";
var FilterCollection_1 = require("../util/FilterCollection");
var OrFilterController = (function () {
    function OrFilterController($scope) {
        var _this = this;
        this.filters = new FilterCollection_1.FilterCollection();
        $scope.filters = this.filters;
        $scope.$watchCollection('filters.ejsObjects', function () { return _this.updateCombinedFilter(); });
        this.scope = $scope;
    }
    OrFilterController.prototype.updateCombinedFilter = function () {
        if (this.scope.combinedFilter) {
            this.scope.$parent.filters.remove(this.scope.combinedFilter);
        }
        this.scope.combinedFilter = this.filters.getAsORFilter();
        if (this.scope.combinedFilter) {
            this.scope.$parent.filters.add(this.scope.combinedFilter);
        }
    };
    OrFilterController.$inject = ['$scope'];
    return OrFilterController;
}());
exports.OrFilterController = OrFilterController;
