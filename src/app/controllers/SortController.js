"use strict";
var SortController = (function () {
    function SortController($scope) {
        this.scope = $scope;
    }
    SortController.prototype.init = function () {
        var _this = this;
        this.scope.$watch('indexVM.sort', function () { return _this.updateEnabled(); });
        this.scope.$watch('sorting.sort', function () { return _this.updateSort(); });
        this.scope.$watch('sorting.enabled', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                _this.updateSort();
            }
        });
        this.updateSort();
    };
    SortController.prototype.updateSort = function () {
        if (this.scope.sorting.enabled) {
            this.scope.indexVM.sort = this.scope.sorting.sort;
        }
        else {
            if (this.isEnabledOnIndexScope()) {
                this.scope.indexVM.sort = null;
            }
        }
    };
    SortController.prototype.updateEnabled = function () {
        this.scope.sorting.enabled = this.isEnabledOnIndexScope();
    };
    SortController.prototype.isEnabledOnIndexScope = function () {
        return this.scope.indexVM.sort != null && angular.equals(this.scope.indexVM.sort.toJSON(), this.scope.sorting.sort.toJSON());
    };
    SortController.$inject = ['$scope'];
    return SortController;
}());
exports.SortController = SortController;
