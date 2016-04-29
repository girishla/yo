'use strict';
import {skinsProvider, addSkinToScope} from "./skins.provider";
import themingProvider from "./theming.provider";

angular
  .module('uiCore.themes', [])
  .provider('uiCoreSkins', skinsProvider)
  .run(addSkinToScope)
  .provider('uiCoreTheming', themingProvider);

