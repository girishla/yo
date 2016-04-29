

export class MainController {

  public classAnimation: string;
  public creationDate: number;


  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService) {

    this.classAnimation = '';
    this.creationDate = 1461186942739;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {

    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

 
}
