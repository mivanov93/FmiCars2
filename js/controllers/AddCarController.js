'use strict';

app.controller('AddCarController', function AddCarController($scope,
        carsDataSrv, manufacturersData, usSpinnerService) {
    manufacturersData.getManufacturersData(function (data) {
        $scope.mans = data;
    });
    $scope.status = {done: false};

    $scope.anotherOne = function () {
        $scope.status.done = false;
        $scope.car = {};
        $scope.addCarForm.$setPristine();
    };
    $scope.startSpin = function () {
        usSpinnerService.spin('spinner-add-cars');
    };
    $scope.stopSpin = function () {
        usSpinnerService.stop('spinner-add-cars');
    };
    $scope.postCarData = function (car, addCarForm) {

        var postCar=angular.copy(car);
        postCar.manId=car.manId.id;
        if (!addCarForm.$valid)
        {
            console.log(addCarForm);
            $scope.status.error = "Wrong data";
        }

        $scope.status.error = "";
        $scope.status.inProg = true;
        $scope.startSpin();

        carsDataSrv.postData(postCar).then(function (data) {
            $scope.msg = "Done";
            $scope.status.done = true;
            $scope.status.inProg = false;
            $scope.status.error = 0;
            $scope.stopSpin();
        }, function () {
            $scope.msg = "Failed";
            $scope.status.done = true;
            $scope.status.inProg = false;
            $scope.status.error = 1;
            $scope.stopSpin();
        });
        console.log($scope.addCarForm)
    }

});