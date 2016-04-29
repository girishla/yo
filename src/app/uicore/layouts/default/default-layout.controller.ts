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
   export default function DefaultLayoutController($scope, $element, $timeout, $window, uiCoreLayout) {
        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = uiCoreLayout.layout; //eslint-disable-line
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;

        ////////////////

        function activateHover() {
            if(uiCoreLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').addClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }

        function removeHover () {
            if(uiCoreLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').removeClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }
    }
