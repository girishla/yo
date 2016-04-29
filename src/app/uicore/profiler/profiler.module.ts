'use strict';
import profilerConfig from "./profiler.config";

export default angular
  .module('uiCore.profiler', [
    'digestHud'
  ])
  .config(profilerConfig);
