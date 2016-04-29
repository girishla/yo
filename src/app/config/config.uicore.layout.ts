/* @ngInject */
export default    function configLayout(uicoreLayoutProvider) {
  // set app templates (all in app/layouts folder so you can tailor them to your needs)

  // loader screen HTML & controller
  uicoreLayoutProvider.setDefaultOption('loaderTemplateUrl', 'app/layouts/loader/loader.tmpl.html');
  uicoreLayoutProvider.setDefaultOption('loaderController', 'LoaderController');

  // left sidemenu HTML and controller
  uicoreLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'app/layouts/leftsidenav/leftsidenav.tmpl.html');
  uicoreLayoutProvider.setDefaultOption('sidebarLeftController', 'LeftSidenavController');

  // right sidemenu HTML and controller
  uicoreLayoutProvider.setDefaultOption('sidebarRightTemplateUrl', 'app/layouts/rightsidenav/rightsidenav.tmpl.html');
  uicoreLayoutProvider.setDefaultOption('sidebarRightController', 'RightSidenavController');

  // top toolbar HTML and controller
  uicoreLayoutProvider.setDefaultOption('toolbarTemplateUrl', 'app/layouts/toolbar/toolbar.tmpl.html');
  uicoreLayoutProvider.setDefaultOption('toolbarController', 'ToolbarController');

  // footer HTML
  uicoreLayoutProvider.setDefaultOption('footerTemplateUrl', 'app/layouts/footer/footer.tmpl.html');

  uicoreLayoutProvider.setDefaultOption('toolbarSize', 'default');

  uicoreLayoutProvider.setDefaultOption('toolbarShrink', false);

  uicoreLayoutProvider.setDefaultOption('toolbarClass', '');

  uicoreLayoutProvider.setDefaultOption('contentClass', '');

  uicoreLayoutProvider.setDefaultOption('sideMenuSize', 'full');

  uicoreLayoutProvider.setDefaultOption('showToolbar', true);

  uicoreLayoutProvider.setDefaultOption('footer', true);
}
