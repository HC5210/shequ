'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmhistorydetail
 * @description
 * # tmhistorydetail
 */
angular.module('luZhouApp')
  .directive('tmHistoryDetail', function () {
    return {
      templateUrl: 'components/tmHistoryDetail.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
