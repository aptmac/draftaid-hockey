
angular.module( 'apf.helpModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/help', {
        templateUrl: 'src/help/help.html'
      });
  }]);
