'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:expander
 * @description
 * # expander
 */
angular.module('luZhouApp')
  .directive('expander', function () {
    return {
      templateUrl: 'components/expander.html',
      restrict: 'EA',
      scope: {
        classifyData: "=",
        search: "=",
        name: "=",
        titleNav: '='
      },
      controller: function ($scope) {
        $scope.hasNodes = function (item) {
          return !!item.children || !!item.children.length;
        };
      },
      link: function (scope, element, attrs) {
        scope.startTree = function (data) {
          var id;
          console.log(data);
          console.log(scope.name)
          setTimeout(function () {
            $("#category").tree({
              data: data,
              onSelect: function (node) {
                if (!node) return;
                if (id == node.id) return;
                id = node.id;
                if (scope.name == "course") {
                  if (id == 0) {
                    scope.search({
                      channelId: '',
                      flag: 'all',
                      title: '',
                      sort: 'Sort',
                      order: 'desc',
                      courseType: 'All',
                      teacher: '',
                      page: 1
                    });
                  } else {
                    scope.search({
                      channelId: id,
                      flag: 'all',
                      title: '',
                      sort: 'Sort',
                      order: 'desc',
                      courseType: 'All',
                      teacher: '',
                      page: 1
                    });
                  }
                } else if (scope.name === 'book') {
                  scope.search({categoryId: id, ptitle: node.text, title: '', page: 1});
                } else if (scope.name === 'article') {
                  scope.search({categoryId: id, search: '', page: 1, CategoryCode: ''});
                } else if (scope.name === 'class') {
                  scope.search({categoryId: id, page: 1, title: "", type: "just"});
                }else if(scope.name === 'month'){
                  // console.log(111)
                  scope.search({Month: id})
                }
              },
            });
            if(scope.name === 'month'){
              var date=new Date;
              var month=date.getMonth()+1;
              var node = $('#category').tree('find',month );
              $('#category').tree('select', node.target);
            }
            
          }, 0);
        };
        scope.$watch('classifyData', function (newVlaue) {
          scope.startTree(newVlaue);
        })
      }
    };
  });
