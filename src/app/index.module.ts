/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../typings/elastic.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';



import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';

import "./filters/filters";
import "./controllers/controllers";
import "./directives/directives";
import "./services/services"
import "./uicore/uicore.module"



declare var malarkey: any;
declare var moment: moment.MomentStatic;

module elasticui {
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

  angular.module('elasticui', ['elasticsearch', 'elasticui.filters', 'elasticui.controllers', 'elasticui.services', 'elasticui.directives','ui.router','toastr','uiCore'])
    .config(config)
    .constant('euiHost', 'http://localhost:3000')
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    ; // ACTION: change to cluster address;


}
