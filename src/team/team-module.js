
angular.module( 'apf.teamModule',
  [])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/yourteam', {
        templateUrl: 'src/team/team.html'
      });
  }]);
