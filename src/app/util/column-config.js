angular.module('apf.util').factory('ColumnsConfig', [function columnsConfigFactory () {
  'use strict';
  return {
    rankColumnWidth: 50,
    playerColumnWidth: 125,
    positionColumnWidth: 25,
    teamColumnWidth: 20,
    bestColumnWidth: 25,
    worstColumnWidth: 25,
    averageColumnWidth: 25
  };
}]);
