/* @ngInject */
export default function moduleConfig($stateProvider, uicoreMenuProvider) {

  $stateProvider
    .state('elasticslice.menu', {
      abstract: true,
      views: {
        sidebarLeft: {
          templateUrl: 'app/uicore/components/menu/menu.tmpl.html',
          controller: 'MenuController',
          controllerAs: 'vm'
        },
        content: {
          template: '<div id="admin-panel-content-view" flex ui-view></div>'
        },
        belowContent: {
          template: '<div ui-view="belowContent"></div>'
        }
      }
    })
    .state('elasticslice.admin-default.searchhome', {
      url: '/searchhome',
      templateUrl: 'app/pages/searchhome/searchhome.tmpl.html',
      controller: 'SearchHomeController',
      controllerAs: 'vm'
    });
  uicoreMenuProvider.addMenu({
    name: 'Home',
    icon: 'zmdi zmdi-home',
    type: 'dropdown',
    priority: 1.1,
    children: [{
      name: 'Search',
      state: 'elasticslice.admin-default.searchhome',
      type: 'link'
    }/*, {
      name: 'General',
      state: 'uicore.dashboard-general',
      type: 'link'
    }*/]
  });

/*  uicoreMenuProvider.addMenu({
    name: 'MENU.DASHBOARDS.DASHBOARDS',
    icon: 'zmdi zmdi-home',
    type: 'dropdown',
    priority: 1.1,
    children: [{
      name: 'MENU.DASHBOARDS.ANALYTICS',
      state: 'elasticslice.admin-default.searchhome',
      type: 'link'
    }/!*,{
      name: 'MENU.DASHBOARDS.GENERAL',
      state: 'triangular.admin-default.dashboard-general',
      type: 'link'
    }*!/]
  });*/

}
