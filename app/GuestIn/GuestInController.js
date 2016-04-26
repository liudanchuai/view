/**
 *开房提交guestIn对象，其中包括checkIn数组，checkInSameList数组，debtList数组，userLog对象
 */
'use strict';

App.controller('GuestInController',['$scope','$filter','Service','Util', function ($scope,$filter, Service,Util) {
    /**
     * 用于提交的对象
     */
    /*对象集合*/
    $scope.guestIn={};
    /*在店户籍数组和对象*/
    $scope.checkIn={};
    /*同住宾客数组*/
    $scope.checkInSame={};
    $scope.checkInSameList=[];
    /**
     * 初始化数据
     */
    $scope.onLoad=function(){
        /*获取当前时间*/
        Service.getAllByPath('time')
            .then(
            function(d){
                /*押金对象，在这初始化*/
                $scope.debt={};
                $scope.now= d.nowTime;
                $scope.checkIn.leaveTime=$scope.now;
                $scope.checkIn.reachTime=$scope.now;
                $scope.debt.doTime=$scope.now;
                $scope.userLog.actionTime=$scope.now;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.onLoad();
    /**
     * 界面上用到的方法
     */
    /*协议房价过滤器*/
    $scope.protocolFilter=function(item){
        return item.roomCategory==$scope.room.roomCategory;
    };
    /*房号输入框改变之后改变room对象*/
    $scope.roomIdChanged= function(){
        var temp=Util.getValueByField($scope.rooms,'roomId',$scope.room.roomId);
        if(temp) {
            $scope.room = angular.copy(temp);
            $scope.somethingWrong=false;
        }else{
            /*乱输入房号无法开房*/
            $scope.wrongMessage='输入的房号不存在';
            $scope.somethingWrong=true;
        }
    };
    /*改变房价协议和房租方式之后改变room.price*/
    $scope.resetRoomPriceAndBreakfast=function(){
        if($scope.roomPriceCategory.code=='day'){
            $scope.room.price=$scope.protocol.roomPrice;
            $scope.room.breakfast=$scope.protocol.breakfast;
            $scope.somethingWrong=false;
        }else if($scope.roomPriceCategory.code=='hour'){
            var hourRoom=Util.getHourRoomByProtocolAndRoomCategory($scope.hourRooms,$scope.protocol.protocolCode,$scope.room.roomCategory);
            if(hourRoom){
                $scope.room.price=hourRoom.basePrice+'('+hourRoom.baseTime+')'+'+'+hourRoom.stepPrice+'('+hourRoom.stepTime+')';
                $scope.somethingWrong=false;
            }else{
                $scope.wrongMessage='该类对应的房价协议不存在小时房计费方式';
                $scope.somethingWrong=true;
            }
            $scope.room.breakfast=0;
        }
    };
    /*增加随行宾客*/
    $scope.addCheckInSame=function(){
        if($scope.checkInSameList.length<$scope.room.totalBed-1) {
            $scope.checkInSame.cardType=$scope.cardCategoryInSame.code;
            $scope.checkInSameList.push(angular.copy($scope.checkInSame));
            $scope.checkInSame=null;
        }else{
            alert("该房床位数为"+$scope.room.totalBed);
        }
    };
    /*弹出随行宾客*/
    $scope.delCheckInSame=function(){
        $scope.checkInSameList.pop();
    };
    /*关闭*/
    $scope.closeGuestIn = function(){
        $scope.$emit('closePop','popGuestIn');
    };
    /*开房*/
    $scope.guestInAction=function(){
        $scope.checkInList=[];
        $scope.debtList=[];
        /*封装要提交的对象*/
        /*在店户籍对象，因为是散客开房只有一个*/
        $scope.checkIn.roomPriceCategory=$scope.roomPriceCategory.code;
        $scope.checkIn.protocolCode=$scope.protocol.protocolCode;
        $scope.checkIn.sourceCode=$scope.guestSource.sourceCode;
        $scope.checkIn.cardType=$scope.cardCategory.code;
        $scope.checkIn.finalRoomPrice=$scope.room.price;
        $scope.checkIn.roomId=$scope.room.roomId;
        $scope.checkIn.gOrS='S';
        $scope.checkIn.breakfast=$scope.room.breakfast;
        $scope.checkIn.userId=$scope.user.userId;

        /*在店户籍数组*/
        $scope.checkInList.push($scope.checkIn);
        $scope.guestIn.checkInList=$scope.checkInList;
        /*同行房客数组*/
        $scope.guestIn.checkInSameList=$scope.checkInSameList;
        /*开房押金数组*/
        $scope.debt.posNumber='100';
        $scope.debt.consume=0;
        $scope.debt.deposit=$scope.checkIn.checkInDeposit;
        $scope.debt.description='押金';
        $scope.debt.currencyCode=$scope.currency.currencyCode;
        $scope.debt.groupAccount=0;
        $scope.debt.selfAccount=0;
        $scope.debt.roomId=$scope.room.roomId;
        $scope.debt.protocolCode=$scope.checkIn.protocolCode;
        $scope.debt.userId=$scope.user.userId;
        $scope.guestIn.debt=$scope.debt;
        /*操作员日志对象*/
        $scope.userLog.userId=$scope.user.userId;
        $scope.userLog.userAction='开房:'+$scope.room.roomId+' 押金:'+$scope.checkIn.checkInDeposit;
        $scope.userLog.actionCategory='KF';
        $scope.guestIn.userLog=$scope.userLog;

        Service.doAction('guestIn',$scope.guestIn)
            .then(
            function(d){
                /*开房成功转换房态*/
                $scope.$emit('refresh');
                /*关闭该页面*/
                $scope.closeGuestIn();
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        )
    };
}]);
