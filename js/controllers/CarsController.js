'use strict';

app.controller('CarsController', function CarsController($scope, carsDataSrv,$log,
        $modal) {

    $scope.carsDataSrv = carsDataSrv;

    $scope.sliderPrice = {
        minValue: 1000,
        maxValue: 50000,
        options: {
            floor: 1000,
            ceil: 50000,
            step: 10000,
            translate: function (value, sliderId, label) {
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
        minValue: 1995,
        maxValue: 2016,
        options: {
            floor: 1995,
            ceil: 2016,
            step: 1,
            translate: function (value, sliderId, label) {
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

    carsDataSrv.getData(function (data) {
        $scope.cars = data;
    });

    $scope.ytbDialog = function (car, size) {
        var modalInstance = $modal.open({
            templateUrl: 'views/partials/ytb.html',
            controller: 'YoutubeCarCtrl',
            size: size,
            resolve: {
                videoUrl: function () {
                    return car.videoUrl;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            // $scope.selected = selectedItem;
        }, function () {
            $log.info('Bug report modal dismissed at: ' + new Date());
        });
    };
    $scope.deletionDone = function () {

    };
});