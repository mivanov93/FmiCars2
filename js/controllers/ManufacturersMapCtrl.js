(function (angular, app) {
    "use strict";
    var ctrlName = "ManufacturersMapCtrl";
    app.controller(ctrlName, ['$scope', '$rootScope', '$log', '$modalInstance', '$timeout', 'manufacturersData',
        function ($scope, $rootScope, $log, $modalInstance, $timeout,
                manufacturersData) {
            $scope.mapLoaded = {val: false};

            manufacturersData.getManufacturersData(function (data) {
                $scope.data = data;
               // console.log(data);
            });
            $scope.getManImagePath = function (man) {
                return {
                    url: man.imgUrl,
                    // The origin for this image is 0,0.
                    origin: [0, 0],
                    // The anchor for this image is the base of the flagpole at 0,32.
                    anchor: [0, 32],
                    scaledSize: [50, 50]
                };
            };
            $scope.ok = function () {
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };


            $scope.showInfoWindow = function (event, man, markerId) {
                if (angular.isDefined($scope.currInfoWindow))
                    $scope.currInfoWindow.close();
                var infowindow = new google.maps.InfoWindow();
                $scope.currInfoWindow = infowindow;
                var center = new google.maps.LatLng(man.shop_latitude, man.shop_longitude);

                infowindow.setContent(
                        '<div style="border-bottom: 1px solid #ef4136;">' +
                        '<span class="h3" style="margin-right: 30px;">' + man.model + '</span>' +
                        '<span>' + man.shop_phone + '</span>' +
                        '</div>' +
                        '<h6>Адрес: ' + man.shop_location + '</h6>' +
                        '<div>Понеделник - петък : ' + man.shop_opens + ' - ' + man.shop_closes + '</div>' +
                        '<div>Събота : ' + man.shop_opens_sat + ' - ' + man.shop_closes_sat + '</div>' +
                        '<div>Неделя : ' + man.shop_opens_sun + ' - ' + man.shop_closes_sun + '</div>' +
                        '<div style="margin: 10px 0;">Паркоместа : ' + man.shop_park_slots + '</div>');

                infowindow.open($scope.mapOpts.myMap, $scope.mapOpts.myMap.markers[markerId]);
            };
            $scope.iconShape = {
                coords: [1, 1, 1, 50, 50, 50, 50, 1],
                type: 'poly'
            }
            $scope.mapOpts = {render: false, myMap: undefined};


            $scope.$on('$destroy', function () {
                $log.warn('map scope destroyed');
                delete $scope.mapOpts.myMap;
            });
            $timeout(function () {
                $scope.mapOpts.render = true;
            });


            $scope.$on('mapInitialized', function (evt, evtMap) {
                $scope.mapOpts.myMap = evtMap;
                $log.debug('Map initialized.');
                $scope.mapLoaded.val = true;
            });


        }]);
})(window.angular, window.app);