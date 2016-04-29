import "./layouts/layouts.module";
import "./components/components.module";
import "./directives/directives.module";
import "./profiler/profiler.module";
import "./router/router.module"
import {layoutRunner, layoutProvider} from "./layouts/layouts.provider";
import runFunction from "./uicore.run";
import routeProvider from "./router/router.provider";
import runFunctionRouter from "./router/router.run";
import routeConfig from "./config.route";
import settingsProvider from "./settings.provider";


export default angular
  .module('uiCore', [
    'ngMaterial',
    'uiCore.layouts', 'uiCore.components', 'uiCore.themes', 'uiCore.directives', 'uiCore.router',
    // 'uiCore.profiler',
    // uncomment above to activate the speed profiler
    'ui.router'
  ])
  .run(layoutRunner)
  .provider('uiCoreLayout', layoutProvider)
  .run(runFunction)
  .provider('uiCoreRoute', routeProvider)
  .run(runFunctionRouter)
  .config(routeConfig)
  .provider('uiCoreSettings', settingsProvider);


