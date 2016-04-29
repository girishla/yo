/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../typings/elastic.d.ts" />


import "./filters/filters";
import "./controllers/controllers";
import "./directives/directives";
import "./services/services"
import "./uicore/uicore.module"
import "./pages/pages.module"
import configChartsJS from "./config/config.chartjs";
import runBlock from './index.run';
import {MainController} from './main/main.controller';
import configLayout from "./config/config.uicore.layout";
import translateConfig from "./config/config.uicore.settings";
import configLog from "./config/config.log";
import themesConfig from "./config/config.uicore.themes";
import {googleChartApiConfig} from "./config/value.googlechart";
import ErrorPageController from "./error-page.controller";
import routeConfigApp from "./config/config.route";

declare var angularDragula:any;

module elasticslice {
  'use strict';

  angular.module('elasticslice', ['elasticsearch', 'elasticslice.filters', 'elasticslice.controllers', 'elasticslice.services', 'elasticslice.directives', 'ui.router', 'uicore', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
      'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'md.data.table', angularDragula(angular), 'ngFileUpload', 'elastucslice.pages'])
    .value('googleChartApiConfig', googleChartApiConfig)
    .constant('euiHost', 'http://localhost:3000')
    .controller('MainController', MainController)
    .controller('ErrorPageController', ErrorPageController)
    .run(runBlock)
    .config(configChartsJS)
    .config(configLayout)
    .config(translateConfig)
    .config(configLog)
    .config(routeConfigApp)
    .config(themesConfig)
    .constant('API_CONFIG', {
      'url': 'http://localhost:3000/'
    });

}
