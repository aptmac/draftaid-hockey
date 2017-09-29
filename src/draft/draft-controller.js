angular.module('apf.draftModule')
  .controller('draftController', ['$scope', '$resource', 'ListUtils', 'pfViewUtils',
  function ($scope, $resource, listUtils, pfViewUtils) {
    // Setup arrays in the scope so html can access them
    $scope.centers = [];
    $scope.leftwings = [];
    $scope.rightwings = [];
    $scope.defence = [];
    $scope.goalies = [];

    $scope.listConfig = {
      selectItems: false,
      multiSelect: false,
      selectionMatchProp: 'rank',
      selectedItems: [],
      rowHeight: 64,
      checkDisabled: false,
      // onClick: handleClick
    };

    $scope.columns = [
      listUtils.rankColumn,
      listUtils.playerColumn,
      listUtils.positionColumn,
      listUtils.teamColumn,
      listUtils.bestColumn,
      listUtils.worstColumn,
      listUtils.averageColumn,
      listUtils.stdDevColumn
    ];

    $scope.viewsConfig = {
      views: [pfViewUtils.getListView()],
    };

    var filterConfig = {
      fields: [
        listUtils.nameFilter
      ],
      resultsCount: 0,
      appliedFilters: [],
      // onFilterChange: filterChange
    };

    $scope.toolbarConfig = {
      viewsConfig: $scope.viewsConfig,
      filterConfig: filterConfig
    };

    $scope.centersLoaded = false;

    // Read in all that juicy ranking data, and store it in scope vars
    $resource('mock_data/players/all').get(function (data) {
      let numPlayers = data.data.length;
      for (let i = 0; i < numPlayers; i++) {
        switch (data.data[i].Position) {
        case 'LW':
          $scope.leftwings.push(data.data[i]);
          break;
        case 'C':
          $scope.centers.push(data.data[i]);
          break;
        case 'RW':
          $scope.rightwings.push(data.data[i]);
          break;
        case 'D':
          $scope.defence.push(data.data[i]);
          break;
        case 'G':
          $scope.goalies.push(data.data[i]);
          break;
        }
      }
    });
  }
]);
