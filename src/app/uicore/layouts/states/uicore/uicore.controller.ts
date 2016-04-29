'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module uiCore
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */

    /* @ngInject */
 export default  function uiCoreStateController($scope, $rootScope, $timeout, $templateRequest, $compile, $element, $window, uiCoreLayout, triLoaderService) {
        var loadingQueue = [];
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;
        vm.showLoader = triLoaderService.isActive();

        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = uiCoreLayout.layout; //eslint-disable-line


        ////////////////

        function activateHover() {
            if(uiCoreLayout.layout.sideMenuSize === 'icon') {
                $element.find('.uiCore-sidenav-left').addClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        }

        function injectFooterUpdateContent(viewName) {
            var contentView = $element.find('.uiCore-content');
            if (viewName === '@uiCore' && angular.isDefined(uiCoreLayout.layout.footerTemplateUrl)) {
                // add footer to the content view
                $templateRequest(uiCoreLayout.layout.footerTemplateUrl)
                .then(function(template) {
                    // compile template with current scope and add to the content
                    var linkFn = $compile(template);
                    var content = linkFn($scope);
                    $timeout(function() {
                        contentView.append(content);
                    });
                    // console.log('add footer', content);
                });
            }
        }

        function loaderEvent(event, isActive) {
            vm.showLoader = isActive;
        }

        function stateChangeStart() {
            // state has changed so start the loader
            triLoaderService.setLoaderActive(true);
        }

        function removeHover () {
            if(uiCoreLayout.layout.sideMenuSize === 'icon') {
                $element.find('.uiCore-sidenav-left').removeClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        }

        function viewContentLoading($event, viewName) {
            // a view is loading so add it to the queue
            // so we know when to turn off the loader
            loadingQueue.push(viewName);
        }

        function viewContentLoaded($event, viewName) {
            if(angular.isDefined(uiCoreLayout.layout.footer) && uiCoreLayout.layout.footer === true) {
                // inject footer into content
                injectFooterUpdateContent(viewName);
            }

            // view content has loaded so remove it from queue
            var index = loadingQueue.indexOf(viewName);
            if(-1 !== index) {
                loadingQueue.splice(index, 1);
            }
            // is the loadingQueue empty?
            if(loadingQueue.length === 0) {
                // nothing left to load so turn off the loader
                triLoaderService.setLoaderActive(false);
            }
        }

        // watches

        // register listeners for loader
        $scope.$on('loader', loaderEvent);

        // watch for ui router state change
        $scope.$on('$stateChangeStart', stateChangeStart);

        // watch for view content loading
        $scope.$on('$viewContentLoading', viewContentLoading);

        // watch for view content loaded
        $scope.$on('$viewContentLoaded', viewContentLoaded);
    }

