'use strict';

/* @ngInject */
export function FooterController(uiCoreSettings, uiCoreLayout) {
  var vm = this;
  vm.name = uiCoreSettings.name;
  vm.copyright = uiCoreSettings.copyright;
  vm.layout = uiCoreLayout.layout;
  vm.version = uiCoreSettings.version;
}

