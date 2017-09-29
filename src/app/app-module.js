angular.module ('apf.appModule', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap',
  'pascalprecht.translate',
  'patternfly',
  'patternfly.toolbars',
  'patternfly.charts',
  'apf.util',
  'apf.draftModule',
  'apf.teamModule',
  'apf.helpModule'
]).config(['$routeProvider', '$translateProvider',
  function ($routeProvider, $translateProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        redirectTo: '/draft'
      })
      .when('/404', {
        templateUrl: 'src/templates/404.html'
      })

      // Otherwise, it's a page we don't have
      .otherwise({
        redirectTo: '/404'
      });

    $translateProvider.translations('default', 'en');
    $translateProvider.preferredLanguage('default');
  }
]);
