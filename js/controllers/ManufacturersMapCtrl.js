(function (angular, app) {
    "use strict";
    var ctrlName = "ManufacturersMapCtrl";
    app.controller(ctrlName, ['$scope', '$rootScope', '$log', '$modalInstance', '$timeout','manufacturersData',
        function ($scope, $rootScope, $log, $modalInstance, $timeout,manufacturersData) {


            $scope.data = manufacturersData.getManufacturersData(function() { });
            $scope.getShopImagePath = function (shop) {
                return {
                    url: shop.shop_img,
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


            $scope.showInfoWindow = function (event, shop, markerId) {
                if (angular.isDefined($scope.currInfoWindow))
                    $scope.currInfoWindow.close();
                var infowindow = new google.maps.InfoWindow();
                $scope.currInfoWindow = infowindow;
                var center = new google.maps.LatLng(shop.shop_latitude, shop.shop_longitude);

                infowindow.setContent(
                        '<div style="border-bottom: 1px solid #ef4136;">' +
                        '<span class="h3" style="margin-right: 30px;">' + shop.brand_name + '</span>' +
                        '<span>' + shop.shop_phone + '</span>' +
                        '</div>' +
                        '<h6>Адрес: ' + shop.shop_location + '</h6>' +
                        '<div>Понеделник - петък : ' + shop.shop_opens + ' - ' + shop.shop_closes + '</div>' +
                        '<div>Събота : ' + shop.shop_opens_sat + ' - ' + shop.shop_closes_sat + '</div>' +
                        '<div>Неделя : ' + shop.shop_opens_sun + ' - ' + shop.shop_closes_sun + '</div>' +
                        '<div style="margin: 10px 0;">Паркоместа : ' + shop.shop_park_slots + '</div>');

                infowindow.open($scope.mapOpts.myMap, $scope.mapOpts.myMap.markers[markerId]);
            };
            $scope.iconShape = {
                coords: [1, 1, 1, 50, 50, 50, 50, 1],
                type: 'poly'
            }
            $scope.mapOpts = { render: false, myMap: undefined };


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