import moduleConfig from "./pages.config";
import SearchHomeController from "./searchhome/searchhome.controller";
export default angular
  .module('elastucslice.pages', [])
  .config(moduleConfig)
  .controller('SearchHomeController', SearchHomeController)





