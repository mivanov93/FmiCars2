'use strict';

var app = angular.module('cars-catalog', ['ngRoute', 'ngResource', 'ngCookies', 'ui.bootstrap', 'angularSpinner','restangular','ngMap']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/manufacturers', {
                templateUrl: 'views/partials/manufacturers.html',
                controller: 'ManufacturersController'
            })
            .when('/cars', {
                templateUrl: 'views/partials/cars.html',
                controller: 'CarsController'
            })
            .when('/add-manufacturer', {
                templateUrl: 'views/partials/add-manufacturer.html',
                controller: 'AddManufacturerController'
            })
            .when('/add-car', {
                templateUrl: 'views/partials/add-car.html',
                controller: 'AddCarController'
            })
            .otherwise({ redirectTo: '/cars' });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://192.168.1.2:8080/CarsMarketBack/rest');

app.config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
    usSpinnerConfigProvider.setDefaults({ color: 'blue' });
}]);