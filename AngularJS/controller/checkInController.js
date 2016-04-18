/**
 *
 */
'use strict';

App.controller('CheckInController', ['$scope', 'Service', function ($scope, Service) {
    /*获取当前时间*/
    $scope.getNowTime=function(){
        Service.getAllByPath('time')
            .then(
            function(d){
                $scope.now= d.nowTime;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    /*开房记表*/
    $scope.getNowTime();
}]);
