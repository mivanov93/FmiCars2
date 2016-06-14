'use strict';

app.factory('carsDataSrv', function ($http, $log,
        baseServiceUrl) {

    var path = '/cars';
    return {
        getData: function (successCallBack) {
            $http({method: 'GET', url: baseServiceUrl + '/cars'})
                    .success(
                            function (carData) {
                                carData = angular.isArray(carData.car) ? carData.car
                                        : [carData.car];
                                successCallBack(carData);
                            }
                    )
                    .error(
                            angular.bind($log, $log.error)
                            )
        },
        deleteDataById: function (id, successCallBack) {
            console.log('deleting ', id)
            $http({method: 'DELETE', url: baseServiceUrl + '/cars/' + parseInt(id)})
                    .success(
                            successCallBack
                            )
                    .error(
                            angular.bind($log, $log.error)
                            );
        },
        postData: function (car) {
            return $http({method: 'POST', url:
                        baseServiceUrl + '/cars',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}, transformRequest: function (
                        obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
                , data: car
            });
        }
    }

})