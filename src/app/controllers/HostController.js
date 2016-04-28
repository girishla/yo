"use strict";
var HostController = (function () {
    function HostController($scope) {
        this.scope = $scope;
    }
    HostController.prototype.init = function () {
        var _this = this;
        this.scope.$watch('indexVM.host', function () { return _this.readHost(); });
        this.scope.$watch('host', function () { return _this.updateHost(); });
        this.updateHost();
    };
    HostController.prototype.updateHost = function () {
        if (this.scope.host !== null) {
            this.scope.indexVM.host = this.scope.host;
        }
    };
    HostController.prototype.readHost = function () {
        this.scope.host = this.scope.indexVM.host;
    };
    HostController.$inject = ['$scope'];
    return HostController;
}());
exports.HostController = HostController;
