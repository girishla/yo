(function() {
    'use strict';

    angular
        .module('elasticslice')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(uicoreSettingsProvider, uicoreRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        uicoreSettingsProvider.setName('uicore');
        uicoreSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' oxygenna.com');
        uicoreSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        uicoreSettingsProvider.setVersion('2.7.0');
        // set the document title that appears on the browser tab
        uicoreRouteProvider.setTitle('uicore');
        uicoreRouteProvider.setSeparator('|');
    }
})();
