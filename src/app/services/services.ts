import {ElasticService} from "./ElasticService";

export var services = angular.module('elasticui.services', [])
  .service('es', ElasticService);
