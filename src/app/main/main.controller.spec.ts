import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('yo'));

  beforeEach(inject(($controller: angular.IControllerService) => {


    mainController = $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(mainController.creationDate > 0).toBeTruthy();
  });

  it('should define animate class after delaying timeout ', inject(($timeout: angular.ITimeoutService) => {
    $timeout.flush();
    expect(mainController.classAnimation).toEqual('rubberBand');
  }));



});
