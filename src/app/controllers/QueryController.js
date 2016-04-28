"use strict";
var EjsTool_1 = require("../util/EjsTool");
var QueryController = (function () {
    function QueryController($scope) {
        this.scope = $scope;
    }
    QueryController.prototype.init = function () {
        var _this = this;
        this.scope.$watch('query.enabled', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                _this.updateQuery();
            }
        });
        this.scope.$watch('query.query', function (newVal, oldVal) {
            if (!EjsTool_1.EjsTool.equals(oldVal, newVal)) {
                _this.updateQuery();
            }
        });
        this.updateQuery();
    };
    QueryController.prototype.updateQuery = function () {
        if (!this.scope.query.query) {
            return;
        }
        if (!this.scope.query.enabled) {
            this.scope.indexVM.query = null;
        }
        else {
            this.scope.indexVM.query = this.scope.query.query;
        }
    };
    QueryController.$inject = ['$scope'];
    return QueryController;
}());
exports.QueryController = QueryController;
