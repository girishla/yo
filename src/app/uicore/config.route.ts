/* @ngInject */
export default  function routeConfig($stateProvider) {
  $stateProvider
    .state('elasticslice', {
      abstract: true,
      templateUrl: 'app/uicore/layouts/default/default.tmpl.html',
      controller: 'DefaultLayoutController',
      controllerAs: 'layoutController'
    })
    .state('elasticslice-no-scroll', {
      abstract: true,
      templateUrl: 'app/uicore/layouts/default/default-no-scroll.tmpl.html',
      controller: 'DefaultLayoutController',
      controllerAs: 'layoutController'
    })
    .state('elasticslice.admin-default', {
      abstract: true,
      views: {
        sidebarLeft: {
          templateUrl: 'app/uicore/components/menu/menu.tmpl.html',
          controller: 'MenuController',
          controllerAs: 'vm'
        },
        sidebarRight: {
          templateUrl: 'app/uicore/components/notifications-panel/notifications-panel.tmpl.html',
          controller: 'NotificationsPanelController',
          controllerAs: 'vm'
        },
        toolbar: {
          templateUrl: 'app/uicore/components/toolbars/toolbar.tmpl.html',
          controller: 'DefaultToolbarController',
          controllerAs: 'vm'
        },
        content: {
          template: '<div id="admin-panel-content-view" class="{{layout.innerContentClass}}" flex ui-view></div>'
        },
        belowContent: {
          template: '<div ui-view="belowContent"></div>'
        }
      }
    })
    .state('elasticslice.admin-default-no-scroll', {
      abstract: true,
      views: {
        sidebarLeft: {
          templateUrl: 'app/uicore/components/menu/menu.tmpl.html',
          controller: 'MenuController',
          controllerAs: 'vm'
        },
        sidebarRight: {
          templateUrl: 'app/uicore/components/notifications-panel/notifications-panel.tmpl.html',
          controller: 'NotificationsPanelController',
          controllerAs: 'vm'
        },
        toolbar: {
          templateUrl: 'app/uicore/components/toolbars/toolbar.tmpl.html',
          controller: 'DefaultToolbarController',
          controllerAs: 'vm'
        },
        content: {
          template: '<div flex ui-view layout="column" class="overflow-hidden"></div>'
        }
      }
    });
}
