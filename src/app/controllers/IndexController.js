"use strict";
var FilterCollection_1 = require("../util/FilterCollection");
var SimpleSet_1 = require("../util/SimpleSet");
var IndexController = (function () {
    function IndexController($scope, $timeout, $window, es, $rootScope) {
        var _this = this;
        this.filters = new FilterCollection_1.FilterCollection();
        this.indexVM = {
            host: null,
            query: null,
            sort: null,
            aggregationProviders: new SimpleSet_1.SimpleSet(),
            filters: this.filters,
            highlight: null,
            loaded: false,
            page: 1,
            index: null,
            loading: false,
            pageCount: 0,
            pageSize: 10,
            results: null,
            refresh: function (softRefresh) {
                if (softRefresh === void 0) { softRefresh = true; }
                return _this.refresh(softRefresh);
            },
            error: null,
            autoLoad: true
        };
        this.searchPromise = null;
        this.refreshPromise = null;
        this.es = es;
        this.$rootScope = $rootScope;
        $scope.indexVM = this.indexVM;
        $scope.ejs = $window.ejs; // so we can use ejs in attributes etc. TODO: better to have a ejs service instead of loading from window
        $scope.filters = this.filters;
        $scope.$watchCollection('indexVM.filters.ejsObjects', function () {
            _this.indexVM.page = 1;
            _this.search();
        });
        $scope.$watchCollection('indexVM.aggregationProviders.objects', function () { return _this.search(); });
        $scope.$watch('indexVM.host', function () {
            if (_this.indexVM.host != null && es.setHost(_this.indexVM.host)) {
                _this.search();
            }
        });
        $scope.$watch('indexVM.sort', function () {
            _this.indexVM.page = 1;
            _this.search();
        });
        $scope.$watch('indexVM.pageSize', function () {
            _this.indexVM.page = 1;
            _this.search();
        });
        $scope.$watch('indexVM.page', function () { return _this.search(); });
        $scope.$watch('indexVM.index', function () { return _this.search(); });
        $scope.$watch('indexVM.query', function () { return _this.search(); });
        $scope.$watch('indexVM.highlight', function () { return _this.search(); });
        $timeout(function () { return _this.loaded(); }, 200); // TODO: find better way to recognize loading of app
    }
    IndexController.prototype.loaded = function () {
        if (!this.indexVM.loaded) {
            this.indexVM.loaded = true;
            if (this.indexVM.autoLoad) {
                this.search();
            }
        }
    };
    IndexController.prototype.getSearchPromise = function () {
        var request = ejs.Request();
        for (var i = 0; i < this.indexVM.aggregationProviders.objects.length; i++) {
            var provider = this.indexVM.aggregationProviders.objects[i];
            var agg = provider(this.filters.ejsObjects);
            request.agg(agg);
        }
        // apply search filters to the request
        var combinedFilter = this.filters.getAsFilter();
        if (combinedFilter != null) {
            request.filter(combinedFilter);
        }
        if (this.indexVM.query != null) {
            request.query(this.indexVM.query);
        }
        else {
            request.query(ejs.MatchAllQuery());
        }
        if (this.indexVM.sort != null) {
            request.sort(this.indexVM.sort);
        }
        if (this.indexVM.highlight != null) {
            request.highlight(this.indexVM.highlight);
        }
        //console.log("request to ES");
        var res = this.es.client.search({
            index: this.indexVM.index,
            size: this.indexVM.pageSize,
            from: this.indexVM.pageSize * (this.indexVM.page - 1),
            body: request
        });
        return res;
    };
    IndexController.prototype.onError = function (err) {
        this.$rootScope.$broadcast('eui-search-error', err);
        this.indexVM.error = err;
    };
    IndexController.prototype.search = function () {
        var _this = this;
        if (!this.indexVM.loaded || !this.indexVM.index) {
            return;
        }
        if (this.refreshPromise != null) {
            var promiseToAbort = this.refreshPromise;
            this.refreshPromise = null;
            promiseToAbort.abort();
        }
        if (this.searchPromise != null) {
            var promiseToAbort = this.searchPromise;
            this.searchPromise = null;
            promiseToAbort.abort();
        }
        this.indexVM.loading = true;
        this.searchPromise = this.getSearchPromise();
        this.searchPromise.then(function (body) {
            _this.searchPromise = null;
            _this.indexVM.error = null;
            _this.onResult(body);
        }, function (err) {
            if (_this.searchPromise) {
                _this.searchPromise = null;
                _this.onError(err);
            }
        });
    };
    IndexController.prototype.refresh = function (softRefresh) {
        var _this = this;
        if (softRefresh === void 0) { softRefresh = true; }
        if (!this.indexVM.loaded || !this.indexVM.index || this.searchPromise != null) {
            return;
        }
        this.indexVM.loading = true;
        this.refreshPromise = this.getSearchPromise();
        this.refreshPromise.then(function (body) {
            _this.refreshPromise = null;
            _this.indexVM.error = null;
            _this.onResult(body, softRefresh);
        }, function (err) {
            if (_this.refreshPromise) {
                _this.refreshPromise = null;
                _this.onError(err);
            }
        });
    };
    IndexController.prototype.onResult = function (body, updateOnlyIfCountChanged) {
        if (updateOnlyIfCountChanged === void 0) { updateOnlyIfCountChanged = false; }
        if (!updateOnlyIfCountChanged || this.indexVM.results == null || this.indexVM.results.hits.total != body.hits.total) {
            this.indexVM.results = body;
            this.indexVM.pageCount = Math.ceil(this.indexVM.results.hits.total / this.indexVM.pageSize);
        }
        this.indexVM.loading = false;
    };
    IndexController.$inject = ['$scope', '$timeout', '$window', 'es', '$rootScope'];
    return IndexController;
}());
exports.IndexController = IndexController;
