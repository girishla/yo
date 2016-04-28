"use strict";
var services_1 = require("./services");
var ElasticService = (function () {
    function ElasticService(esFactory, euiHost) {
        this.esFactory = esFactory;
        this.setHost(euiHost);
    }
    ElasticService.prototype.setHost = function (host) {
        if (host === this.host) {
            return false;
        }
        this.host = host;
        this.client = this.esFactory({
            host: host,
            calcDeadTimeout: "flat"
        });
        return true;
    };
    ElasticService.$inject = ['esFactory', 'euiHost'];
    return ElasticService;
}());
exports.ElasticService = ElasticService;
services_1.services.service('es', ElasticService);
