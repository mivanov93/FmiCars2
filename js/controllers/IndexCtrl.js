'use strict';

app.controller('IndexCtrl', function CarsController($scope, $modal, $log) {

    $scope.loginDialog = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/partials/login.html',
                controller: 'LoginDialogCtrl',
                size: size,
                resolve: {
                }
            });

            modalInstance.result.then(function (selectedItem) {
                // $scope.selected = selectedItem;
            }, function () {
                $log.info('Bug report modal dismissed at: ' + new Date());
            });
    };

    $scope.mapDialog = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'views/partials/map.html',
            controller: 'ManufacturersMapCtrl',
            size: size,
            resolve: {
            }
        });

        modalInstance.result.then(function (selectedItem) {
            // $scope.selected = selectedItem;
        }, function () {
            $log.info('Bug report modal dismissed at: ' + new Date());
        });
    };
});