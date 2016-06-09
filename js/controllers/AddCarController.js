'use strict';

app.controller('AddCarController', function AddCarController($scope, carsDataSrv, usSpinnerService) {

    $scope.status = { done: false };

    $scope.anotherOne = function () { $scope.status.done = false; };
    $scope.startSpin = function () { usSpinnerService.spin('spinner-add-cars'); };
    $scope.stopSpin = function () { usSpinnerService.stop('spinner-add-cars'); };

    $scope.postCarData = function (car, addCarForm) {
        if (!addCarForm.$valid)
        {
            console.log(addCarForm);
            $scope.status.error = "Wrong data";
        }

        $scope.status.error = "";
        $scope.status.inProg = true;
        $scope.startSpin();

	    carsDataSrv.postData(car).then(function (data) {
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