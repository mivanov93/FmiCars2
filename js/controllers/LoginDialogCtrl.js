var ctrlName = "LoginDialogCtrl";
app.controller(ctrlName, ['$scope', '$rootScope', '$log', '$modalInstance', '$timeout','userSrv',
    function ($scope, $rootScope, $log, $modalInstance, $timeout, userSrv) {
        $scope.user = {};
        $scope.tryLogin = function () {
            userSrv.login($scope.user.name, $scope.user.pass);
        };

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };



    }]);