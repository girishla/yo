import {BreadcrumbsService} from "./breadcrumbs/breadcrumbs.service";
import {FooterController} from "./footer/footer.controller";
import TriLoader from "./loader/loader.directive";
import LoaderService from "./loader/loader-service";
import {uicoreMenuDirective} from "./menu/menu.directive";
import {menuProvider} from "./menu/menu.provider";
import {uicoreMenuItemDirective} from "./menu/menu-item.directive";
import NotificationsPanelController from "./notifications-panel/notifications-panel.controller";
import tableImage from "./table/table-cell-image.filter";
import triTable from "./table/table.directive";
import widget from "./widget/widget.directive";
import DefaultToolbarController from "./toolbars/toolbar.controller";
import TriWizard from "./wizard/wizard.directive";
import startFrom from "./table/table-start-from.filter";
import WizardFormProgress from "./wizard/wizard-form.directive";
import MenuController from "./menu/menu.controller";


export default angular
  .module('uicore.components', [])
  .factory('uicoreBreadcrumbsService', BreadcrumbsService)
  .controller('FooterController', FooterController)
  .directive('uicoreLoader', TriLoader)
  .factory('uicoreLoaderService', LoaderService)
  .directive('uicoreMenu', uicoreMenuDirective)
  .provider('uicoreMenu', menuProvider)
  .directive('uicoreMenuItem', uicoreMenuItemDirective)
  .controller('NotificationsPanelController', NotificationsPanelController)
  .controller('MenuController', MenuController)
  .directive('triTable', triTable)
  .filter('tableImage', tableImage)
  .filter('startFrom', startFrom)
  .controller('DefaultToolbarController', DefaultToolbarController)
  .directive('uicoreWidget', widget)
  .directive('uicoreWizard', TriWizard)
  .directive('uicoreWizardForm', WizardFormProgress);

