'use strict';

app.factory('userSrv', function ($http, $log, Restangular, baseServiceUrl) {

    var path = '/';
    var Api = Restangular.oneUrl('Login', baseServiceUrl + path);

    return {
        login: function (name, pass) {
            Api.post('Token', { username: "gy@kj.com", password: "7779aas", grant_type: "password" });
        },
        register: function (name, pass) {
            var userData = {
                Email: "gy@kj.com",
                Password: "7779aas",
                ConfirmPassword: "7779aas"
            }
            Api.post('api/Account/Register', userData);
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