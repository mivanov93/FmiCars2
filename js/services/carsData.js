'use strict';

app.factory('carsDataSrv', function($http, $log, Restangular, baseServiceUrl) {

    var path = '/api/Cars';
    var carApi = Restangular.allUrl('Cars', baseServiceUrl + path);

	return {
		getData: function() {
		    return carApi.getList();
		},
		postData: function (car) {
		    console.log(JSON.stringify(car));
		    return $http.post(
                baseServiceUrl + '/api/Cars',
                JSON.stringify(car),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
		}
	}

})