/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../typings/elastic.d.ts" />
"use strict";
var index_config_1 = require('./index.config');
var index_route_1 = require('./index.route');
var index_run_1 = require('./index.run');
var main_controller_1 = require('./main/main.controller');
require("./filters/filters");
require("./controllers/controllers");
require("./directives/directives");
require("./services/services");
var elasticui;
(function (elasticui) {
    'use strict';
    /*angular.module('yo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
      .constant('malarkey', malarkey)
      .constant('moment', moment)
      .config(config)
      .config(routerConfig)
      .run(runBlock)
      .service('githubContributor', GithubContributor)
      .service('webDevTec', WebDevTecService)
      .controller('MainController', MainController)
      .directive('acmeNavbar', acmeNavbar)
      .directive('acmeMalarkey', acmeMalarkey);*/
    angular.module('elasticui', ['elasticsearch', 'elasticui.filters', 'elasticui.controllers', 'elasticui.services', 'elasticui.directives', 'ui.router', 'toastr'])
        .config(index_config_1.config)
        .config(index_route_1.routerConfig)
        .run(index_run_1.runBlock)
        .controller('MainController', main_controller_1.MainController);
})(elasticui || (elasticui = {}));
