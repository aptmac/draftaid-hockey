
angular.module('apf.draftModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/draft', {
        templateUrl: 'src/draft/draft.html',
        controller: 'draftController'
      });
  }]);
