'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmguidelogin
 * @description
 * # tmguidelogin
 */
angular.module('luZhouApp')
  .directive('tmGuideLogin', function () {
    return {
      templateUrl: 'components/tmGuideLogin.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
