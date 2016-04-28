"use strict";
var MainController = (function () {
    /* @ngInject */
    function MainController($timeout, toastr) {
        this.classAnimation = '';
        this.creationDate = 1461186942739;
        this.toastr = toastr;
        this.activate($timeout);
    }
    /** @ngInject */
    MainController.prototype.activate = function ($timeout) {
        var _this = this;
        $timeout(function () {
            _this.classAnimation = 'rubberBand';
        }, 4000);
    };
    MainController.prototype.showToastr = function () {
        this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
        this.classAnimation = '';
    };
    return MainController;
}());
exports.MainController = MainController;
