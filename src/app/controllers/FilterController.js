"use strict";
var EjsTool_1 = require("../util/EjsTool");
var FilterController = (function () {
    function FilterController($scope) {
        this.scope = $scope;
    }
    FilterController.prototype.init = function () {
        var _this = this;
        if (this.scope.filter.filter) {
            var isEnabled = this.scope.filters.contains(this.scope.filter.filter);
            if (!isEnabled && this.scope.filter.enabled) {
                this.scope.filters.add(this.scope.filter.filter);
                isEnabled = true;
            }
        }
        this.scope.filter.enabled = isEnabled;
        this.scope.$watch('filter.enabled', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                _this.updateFilter();
            }
        });
        this.scope.$watch('filter.filter', function (newVal, oldVal) {
            if (!EjsTool_1.EjsTool.equals(oldVal, newVal)) {
                if (oldVal) {
                    _this.scope.filters.remove(oldVal);
                }
                _this.updateFilter();
            }
        });
    };
    FilterController.prototype.updateFilter = function () {
        if (!this.scope.filter.filter) {
            return;
        }
        if (this.scope.filter.enabled) {
            this.scope.filters.add(this.scope.filter.filter);
        }
        else {
            this.scope.filters.remove(this.scope.filter.filter);
        }
    };
    FilterController.$inject = ['$scope'];
    return FilterController;
}());
exports.FilterController = FilterController;
