'use strict';


/* @ngInject */
export default    function routeConfig($stateProvider) {
  $stateProvider
    .state('uiCore', {
      abstract: true,
      views: {
        'root': {
          templateUrl: 'app/uiCore/layouts/states/uiCore/uiCore.tmpl.html',
          controller: 'uiCoreStateController',
          controllerAs: 'stateController'
        },
        'sidebarLeft@uiCore': {
          templateProvider: function ($templateRequest, uiCoreLayout) {
            if (angular.isDefined(uiCoreLayout.layout.sidebarLeftTemplateUrl)) {
              return $templateRequest(uiCoreLayout.layout.sidebarLeftTemplateUrl);
            }
          },
          controllerProvider: function (uiCoreLayout) {
            return uiCoreLayout.layout.sidebarLeftController;
          },
          controllerAs: 'vm'
        },
        'sidebarRight@uiCore': {
          templateProvider: function ($templateRequest, uiCoreLayout) {
            if (angular.isDefined(uiCoreLayout.layout.sidebarRightTemplateUrl)) {
              return $templateRequest(uiCoreLayout.layout.sidebarRightTemplateUrl);
            }
          },
          controllerProvider: function (uiCoreLayout) {
            return uiCoreLayout.layout.sidebarRightController;
          },
          controllerAs: 'vm'
        },
        'toolbar@uiCore': {
          templateProvider: function ($templateRequest, uiCoreLayout) {
            if (angular.isDefined(uiCoreLayout.layout.toolbarTemplateUrl)) {
              return $templateRequest(uiCoreLayout.layout.toolbarTemplateUrl);
            }
          },
          controllerProvider: function (uiCoreLayout) {
            return uiCoreLayout.layout.toolbarController;
          },
          controllerAs: 'vm'
        },
        'loader@uiCore': {
          templateProvider: function ($templateRequest, uiCoreLayout) {
            if (angular.isDefined(uiCoreLayout.layout.loaderTemplateUrl)) {
              return $templateRequest(uiCoreLayout.layout.loaderTemplateUrl);
            }
          },
          controllerProvider: function (uiCoreLayout) {
            return uiCoreLayout.layout.loaderController;
          },
          controllerAs: 'loader'
        }
      }
    });
}
