(function (angular, app) {
    "use strict";
    var ctrlName = "ManufacturersMapCtrl";
    app.controller(ctrlName, ['$scope', '$rootScope', '$log', '$modalInstance', '$timeout',
        function ($scope, $rootScope, $log, $modalInstance, $timeout) {


            $scope.data = {
                rows:
                    [{
                        shop_name: "random", shop_id: 1,
                        shop_latitude: 42.7, shop_longitude: 23.3,
                        shop_img: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xft1/v/t1.0-1/p50x50/10898069_10153709784301040_4939348701319740534_n.jpg?oh=c561632f1d88db2d5a6b23b873257461&oe=5627E223&__gda__=1444348010_cb5fb056c922948ad4c1b3edae98c7d4"

                    }]
            };
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