import 'angular-patternfly';
import '@uirouter/angularjs';
import 'oclazyload';
import 'bootstrap';

import appRouting from './app.routing.js';
import AppController from './app.controller.js';

require.ensure([], () => {
  require('angular-patternfly/node_modules/patternfly/dist/css/patternfly.css');
  require('angular-patternfly/node_modules/patternfly/dist/css/patternfly-additions.css');
  // require('scss/app.scss');
});

export const appModules = angular
  .module('appModule', [
    'ui.router',
    'ui.bootstrap',
    appRouting,
    AppController
  ]);