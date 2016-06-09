'use strict';

app.factory('carsData', function($http, $log, baseServiceUrl) {

	return {
		getCarsData: function(successCallBack) {
		    $http({ method: 'GET', url: baseServiceUrl + '/api/Cars' })
				.success(function(data, status, headers, config) {
					successCallBack(data);
				})
				.error(function(data, status, headers, config) {
					$log.error(data);
				})
		},
		postCarData: function (car) {
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