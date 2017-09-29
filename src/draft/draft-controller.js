angular.module('apf.draftModule')
  .controller('draftController', ['$scope', '$resource', 'ListUtils', 'pfViewUtils',
  function ($scope, $resource, listUtils, pfViewUtils) {
    /**
     * TODO:
     * - Add a spinner for when data is loading
     * - Add Player Search
     * - Implement Pagination
     * - Get Sorting & Filtering Working
     * - Add Buttons to ListView
     * - - So when drafting, click a button on the row instead of the row itself
     */

    // Setup arrays in the scope so html can access them
    $scope.centers = [];
    $scope.wings = [];
    $scope.defence = [];
    $scope.goalies = [];
    $scope.pickNumber = 0;
    $scope.centersLeft = $scope.centers.length;
    $scope.defenceLeft = $scope.defence.length;
    $scope.goaliesLeft = $scope.goalies.length;

    $scope.listConfig = {
      selectedItems: [],
      showSelectBox: true,
      dblClick: true,
      onDblClick: function (item) {
        if ($scope.listConfig.selectedItems.includes(item)) {
          $scope.pickNumber--;
          let i = $scope.listConfig.selectedItems.indexOf(item);
          $scope.listConfig.selectedItems.splice(i);
        } else {
          $scope.listConfig.selectedItems.push(item);
          $scope.pickNumber++;
        }
      },
    };

    $scope.columns = [
      listUtils.rankColumn,
      listUtils.playerColumn,
      // listUtils.positionColumn,
      listUtils.teamColumn,
      listUtils.bestColumn,
      listUtils.worstColumn,
      // listUtils.averageColumn,
    ];

    $scope.viewsConfig = {
      views: [pfViewUtils.getListView()],
    };

    $scope.toolbarConfig = {
      viewsConfig: $scope.viewsConfig,
    };

    // Read in all that juicy ranking data, and store it in scope vars
    $resource('mock_data/players/all').get(function (data) {
      let numPlayers = data.data.length;
      for (let i = 0; i < numPlayers; i++) {
        switch (data.data[i].Position) {
        case 'LW':
          $scope.wings.push(data.data[i]);
          break;
        case 'C':
          $scope.centers.push(data.data[i]);
          break;
        case 'RW':
          $scope.wings.push(data.data[i]);
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
