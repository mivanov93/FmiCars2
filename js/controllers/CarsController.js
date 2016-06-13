'use strict';

app.controller('CarsController', function CarsController($scope, carsDataSrv) {

    carsDataSrv.getData(function (data) {

        $scope.cars = data;
        $scope.cars.car = angular.isArray($scope.cars.car)
                ? $scope.cars.car : [$scope.cars.car];
    });
    $scope.carsDataSrv = carsDataSrv;
    $scope.deletionDone = function () {

    };
});