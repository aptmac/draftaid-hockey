let errorRouter = angular
  .module('error.routing', ['ui.router'])
  .config(errorRouting);

function errorRouting ($stateProvider, $urlProvider) {
  'ngInject';
  $stateProvider.state('404', {
    templateProvider: $q => {
      'ngInject';
      return $q(resolve =>
        require.ensure([], () => {
          resolve(require('templates/404.html'));
        })
      );
    }
  });

  $urlProvider.otherwise(($injector, $location) => {
    $injector.get('$state').go('404', { location: $location.path() });
  });
}

let componentRoutingModules = [errorRouter.name];
let req = require.context('./components', true, /\.routing\.js/);
req.keys().forEach(k => componentRoutingModules.push(req(k).default));

let appRouter = angular.module('app.routing', componentRoutingModules);

export default appRouter.name;

export { errorRouter, errorRouting };