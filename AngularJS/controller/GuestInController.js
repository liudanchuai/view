/**
 *
 */
'use strict';

App.controller('GuestInController', ['$scope', 'Service', function ($scope, Service) {
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
    /*开房*/
    $scope.guestIn=function(){
        Service.doAction('guestIn')
            .then(
            function(d){

            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        )
    };
    /*获取当前时间*/
    $scope.getNowTime();
}]);
