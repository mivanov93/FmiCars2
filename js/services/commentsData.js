'use strict';

app.factory('commentsData', function($http, $log, baseServiceUrl) {

	return {
		getData: function(carId,successCallBack) {
		    $http({ method: 'GET', url: baseServiceUrl + '/api/Comments/'+carId })
				.success(function(data, status, headers, config) {
					successCallBack(data);
				})
				.error(function(data, status, headers, config) {
					$log.error(data);
				})
		},
		postData: function (car) {
		    console.log(JSON.stringify(car));
		    return $http.post(
                baseServiceUrl + '/api/Comments',
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