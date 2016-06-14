'use strict';

var ctrlName = "YoutubeCarCtrl";
app.controller(ctrlName, ['$scope', '$rootScope', '$log', '$modalInstance', '$timeout', 'videoUrl',
    function ($scope, $rootScope, $log, $modalInstance, $timeout,
            videoUrl) {
        $scope.videoUrl = videoUrl;
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);