"use strict";
var HighlightController = (function () {
    function HighlightController($scope) {
        this.scope = $scope;
    }
    HighlightController.prototype.init = function () {
        var _this = this;
        this.scope.$watch('indexVM.highlight', function () { return _this.updateEnabled(); });
        this.scope.$watch('highlighting.highlight', function () { return _this.updateHighlight(); });
        this.scope.$watch('highlighting.enabled', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                _this.updateHighlight();
            }
        });
        this.updateHighlight();
    };
    HighlightController.prototype.updateHighlight = function () {
        if (this.scope.highlighting.enabled) {
            this.scope.indexVM.highlight = this.scope.highlighting.highlight;
        }
        else {
            if (this.isEnabledOnIndexScope()) {
                this.scope.indexVM.highlight = null;
            }
        }
    };
    HighlightController.prototype.updateEnabled = function () {
        this.scope.highlighting.enabled = this.isEnabledOnIndexScope();
    };
    HighlightController.prototype.isEnabledOnIndexScope = function () {
        return this.scope.indexVM.highlight != null && angular.equals(this.scope.indexVM.highlight.toJSON(), this.scope.highlighting.highlight.toJSON());
    };
    HighlightController.$inject = ['$scope'];
    return HighlightController;
}());
exports.HighlightController = HighlightController;
