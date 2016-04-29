import uiCoreStateController from "./states/uicore/uicore.controller";
import triDefaultContent from "./default/default-content.directive";
import DefaultLayoutController from "./default/default-layout.controller";

export default angular
  .module('uiCore.layouts', [])
  .controller('uiCoreStateController', uiCoreStateController)
  .directive('uiCoreDefaultContent', triDefaultContent)
  .controller('DefaultLayoutController', DefaultLayoutController)
