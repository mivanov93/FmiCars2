'use strict';

app.controller('ManufacturersController', function ManufacturersController(
        $scope, manufacturersData) {

    manufacturersData.getManufacturersData(function (data) {
        $scope.manufacturers = data;
        $scope.manufacturers.manufacturer = angular.isArray($scope.manufacturers.manufacturer)
                ? $scope.manufacturers.manufacturer : [$scope.manufacturers.manufacturer];
        console.log($scope.manufacturers);
    });
       $scope.manufacturersDataSrv = manufacturersData;
          $scope.deletionDone = function () {

    };
});