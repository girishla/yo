'use strict';

/* @ngInject */
export default function TriLoader() {
  var directive = {
    bindToController: true,
    controller: TriLoaderController,
    controllerAs: 'vm',
    template: '<div flex class="loader padding-100" ng-show="vm.isActive()" layout="column" layout-fill layout-align="center center"><h3 class="md-headline">{{vm.uiCoreSettings.name}}</h3><md-progress-linear md-mode="indeterminate"></md-progress-linear></div>',
    restrict: 'E',
    replace: true,
    scope: {}
  };
  return directive;
}

/* @ngInject */
function TriLoaderController($rootScope, triLoaderService, uiCoreSettings) {
  var vm = this;
  vm.uiCoreSettings = uiCoreSettings;
  vm.isActive = triLoaderService.isActive;
}
