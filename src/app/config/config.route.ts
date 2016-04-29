/* @ngInject */
export default  function routeConfigApp($stateProvider, $urlRouterProvider) {
  // Setup the apps routes

  // 404 & 500 pages
  $stateProvider
    .state('404', {
      url: '/404',
      templateUrl: 'app/404.tmpl.html',
      controllerAs: 'vm',
      controller: function ($state) {
        var vm = this;
        vm.goHome = function () {
          $state.go('root.searchhome');
        };
      }
    })

    .state('500', {
      url: '/500',
      templateUrl: 'app/500.tmpl.html',
      controllerAs: 'vm',
      controller: function ($state) {
        var vm = this;
        vm.goHome = function () {
          $state.go('root.searchhome');
        };
      }
    });


  // set default routes when no path specified
  $urlRouterProvider.when('', '/searchhome');
  $urlRouterProvider.when('/', '/searchhome');

  // always goto 404 if route not found
  $urlRouterProvider.otherwise('/404');
}
