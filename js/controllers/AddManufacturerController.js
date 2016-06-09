'use strict';
app.controller('AddManufacturerController', function AddManufacturerController($scope, manufacturersData) {

    $scope.status = { done: false };
    $scope.anotherOne = function () { $scope.status.done = false; };

    $scope.postManufacturerData = function (manufacturer, addManForm) {

        if (!addManForm.$valid) {
            console.log(addManForm);
            $scope.status.error = "Wrong data";
        }

        $scope.status.error = "";
        $scope.status.inProg = true;

        manufacturersData.postManufacturerData(manufacturer).then(function (data) {
            $scope.msg = "Done";
            $scope.status.done = true;
            $scope.status.inProg = false;
            $scope.status.error = 0;
        }, function () {
            $scope.msg = "Failed";
            $scope.status.done = true;
            $scope.status.inProg = false;
            $scope.status.error = 1;
        });

        console.log($scope.addManForm);
	}
});

