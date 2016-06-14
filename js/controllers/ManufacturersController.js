'use strict';

app.controller('ManufacturersController', function ManufacturersController(
        $scope, manufacturersData) {

    manufacturersData.getManufacturersData(function (data) {
        $scope.manufacturers = data;
    });
       $scope.manufacturersDataSrv = manufacturersData;
          $scope.deletionDone = function () {

    };
});