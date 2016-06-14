'use strict';

app.factory('manufacturersData', function ($http, $log, baseServiceUrl) {

    return {
        getManufacturersData: function (successCallBack) {
            $http({method: 'GET', url: baseServiceUrl + '/mans'})
                    .success( function (manData) {
                                manData = angular.isArray(manData.manufacturer) ? manData.manufacturer
                                        : [manData.manufacturer];
                                successCallBack(manData);
                            }
                    )
                    .error(
                            angular.bind($log, $log.error)
                            )
        },
        deleteDataById: function (id, successCallBack) {
            console.log('deleting ', id)
            $http({method: 'DELETE', url: baseServiceUrl + '/mans/' + parseInt(id)})
                    .success(
                            successCallBack
                            )
                    .error(
                            angular.bind($log, $log.error)
                            );
        },
        postManufacturerData: function (manufacturer) {
            console.log(manufacturer);

            return $http({method: 'POST', url:
                        baseServiceUrl + '/mans',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}, transformRequest: function (
                        obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
                , data: manufacturer
            });
        }
    }

});