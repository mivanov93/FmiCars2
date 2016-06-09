'use strict';

app.controller('ManufacturersController', function ManufacturersController ($scope, manufacturersData) {

	manufacturersData.getManufacturersData(function(data){
		$scope.manufacturers = data;
	});
});