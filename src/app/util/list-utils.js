angular.module('apf.util').factory('ListUtils', ['ColumnsConfig', function listUtilsFactory (columnsConfig) {
  'use strict';

  var rankColumn = {
    columnType: 'label',
    title: 'Rank',
    field: 'Rank',
    width: columnsConfig.rankColumnWidth
  };

  var playerColumn = {
    columnType: 'label',
    title: 'Player',
    field: 'Player',
    width: columnsConfig.playerColumnWidth
  };

  var positionColumn = {
    columnType: 'label',
    title: 'Position',
    field: 'Position',
    width: columnsConfig.positionColumnWidth
  };

  var teamColumn = {
    columnType: 'label',
    title: 'Team',
    field: 'Team',
    width: columnsConfig.teamColumnWidth
  };

  var bestColumn = {
    columnType: 'label',
    title: 'Best',
    field: 'Best',
    width: columnsConfig.bestColumnWidth
  };

  var worstColumn = {
    columnType: 'label',
    title: 'Worst',
    field: 'Worst',
    width: columnsConfig.worstColumnWidth
  };

  var averageColumn = {
    columnType: 'label',
    title: 'Average',
    field: 'Avg',
    width: columnsConfig.averageColumnWidth
  };

  return {
    rankColumn:               rankColumn,
    playerColumn:             playerColumn,
    positionColumn:           positionColumn,
    teamColumn:               teamColumn,
    bestColumn:               bestColumn,
    worstColumn:              worstColumn,
    averageColumn:            averageColumn
  };
}]);
