/* @ngInject */
export default  function ErrorPageController($state) {
  var vm = this;

  vm.goHome = goHome;

  /////////

  function goHome() {
    $state.go('uicore.dashboard-analytics');
  }
}

