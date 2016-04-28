"use strict";
describe('controllers', function () {
    var mainController;
    beforeEach(angular.mock.module('yo'));
    beforeEach(inject(function ($controller, toastr) {
        spyOn(toastr, 'info').and.callThrough();
        mainController = $controller('MainController');
    }));
    it('should have a timestamp creation date', function () {
        expect(mainController.creationDate > 0).toBeTruthy();
    });
    it('should define animate class after delaying timeout ', inject(function ($timeout) {
        $timeout.flush();
        expect(mainController.classAnimation).toEqual('rubberBand');
    }));
    it('should show a Toastr info and stop animation when invoke showToastr()', inject(function (toastr) {
        mainController.showToastr();
        expect(toastr.info).toHaveBeenCalled();
        expect(mainController.classAnimation).toEqual('');
    }));
});
