class AppController {
  constructor ($scope) {
    'ngInject';
    this._scope = $scope;
  }
}

let name = 'AppController';
export default angular
  .module(name, [])
  .controller(name, AppController)
  .name;