'use strict';

app.controller('CarsController', function CarsController($scope, carsDataSrv) {

	$scope.carsDataSrv = carsDataSrv;

	$scope.sliderPrice = {
		minValue : 1000,
		maxValue : 50000,
		options : {
			floor : 1000,
			ceil : 50000,
			step : 10000,
			translate: function(value, sliderId, label) {
			      switch (label) {
			        case 'model':
			          return '<b>Min price:</b> $' + value;
			        case 'high':
			          return '<b>Max price:</b> $' + value;
			        default:
			          return '$' + value;
			      }
			}
		}
	};

	$scope.sliderYear = {
		minValue : 1995,
		maxValue : 2016,
		options : {
			floor : 1995,
			ceil : 2016,
			step : 1,
			translate: function(value, sliderId, label) {
			      switch (label) {
			        case 'model':
			          return '<b>Min year:</b> ' + value;
			        case 'high':
			          return '<b>Max year:</b> ' + value;
			        default:
			          return value;
			      }
			}
		}
	};

	carsDataSrv.getData(function(data) {
		$scope.cars = data;
		
		if ($scope.cars) {
			$scope.cars.car = angular.isArray($scope.cars.car) ? $scope.cars.car
					: [ $scope.cars.car ];
		}
	});

	$scope.deletionDone = function() {

	};
});