"use strict";
var MapFilter_1 = require('./MapFilter');
var CachedFilter_1 = require('./CachedFilter');
var RoundFilter_1 = require('./RoundFilter');
var PageRangeFilter_1 = require('./PageRangeFilter');
var RangeFilter_1 = require('./RangeFilter');
var TimestampFilter_1 = require('./TimestampFilter');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('elasticui.filters', [])
    .filter('euiMap', MapFilter_1.MapFilter)
    .filter('euiCached', CachedFilter_1.CachedFilter)
    .filter('euiRound', RoundFilter_1.RoundFilter)
    .filter('euiPageRange', PageRangeFilter_1.PageRangeFilter)
    .filter('euiRange', RangeFilter_1.RangeFilter)
    .filter('euiTimestamp', TimestampFilter_1.TimestampFilter);
;
