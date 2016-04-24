/**
 *
 */
'use strict';

App.controller('GuestInController',['$scope','Service', function ($scope, Service) {
    /**
     * 用于提交的对象
     */
    /*在店户籍数组和对象*/
    $scope.checkInList=[];
    $scope.checkIn={};
    /*同住宾客数组*/
    $scope.checkInSameList=[];
    /*押金数组*/
    $scope.debtList=[];
    /*操作员日志对象*/
    $scope.userLog={};
    /**
     * 用于显示不提交的对象
     */
    /*房间类别*/
    $scope.roomCategory=sessionStorage.getItem("categoryName");//中文名
    /**
     * 初始化数据
     */

    $scope.onLoad=function(){
        $scope.checkIn.roomId=sessionStorage.getItem("roomId");
        /*获得客源数组*/
        Service.getAllByPath('guestSource')
            .then(
            function (d) {
                $scope.guestSource = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得协议价数组*/
        Service.getAllByPath('protocol')
            .then(
            function (d) {
                $scope.protocol = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得房租方式数组*/
        Service.getAllByPath('roomPriceCategory')
            .then(
            function (d) {
                $scope.roomPriceCategory = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获取当前时间*/
        $scope.getNowTime();
    };
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
        $scope.roomPriceCategory=$scope.roomPriceCategory.code;
        Service.doAction('guestIn')
            .then(
            function(d){

            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        )
    };
    /*关闭*/
    $scope.close = function(){
        $("#np-pop-iframe",window.parent.document).remove();
    };
    $scope.onLoad();
}]);
