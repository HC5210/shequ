'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmhistorymonth
 * @description
 * # tmhistorymonth
 */
angular.module('luZhouApp')
  .directive('tmHistoryMonth', function () {
    return {
      templateUrl: 'components/tmHistoryMonth.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
