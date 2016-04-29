'use strict';
import countupto from "./countupto.directive";
import paletteBackground from "./palette-background.directive";
import samePassword from "./same-password.directive";
import themeBackground from "./theme-background.directive";

export default    angular
  .module('uiCore.directives', [])
  .directive('countupto', countupto)
  .directive('paletteBackground', paletteBackground)
  .directive('uiCoreSamePassword', samePassword)
  .directive('themeBackground', themeBackground)
