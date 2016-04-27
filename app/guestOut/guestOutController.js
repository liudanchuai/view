/**
 * Created by Administrator on 2016-04-26.
 * 离店结算
 */
App.controller('GuestOutController', ['$scope', 'Service', 'Util', function ($scope, Service, Util) {
    /**
     * 用于提交的对象
     */
    /*对象集合*/
    $scope.guestOut={};
    /*消费明细数组*/
    $scope.debtList=[];
    /*结账记录对象*/
    $scope.debtPay={};
    /*离店明细对象*/
    $scope.checkOut={};
    /*离店团队房明细数组（散客离店则为空）*/
    $scope.checkOutGroupRoom={};
    /**
     * 用于查询和显示的对象
     */
    /*消费明细查询对象（根据他查找出需要显示的消费明细）*/
    $scope.debtQuery={};
    /*在店户籍信息*/
    $scope.checkIn={};
    /*在店户籍查询对象*/
    $scope.checkInQuery={};
    /**
     * 初始化数据
     */
    $scope.onLoad=function(){
        /*设计查询对象*/
        $scope.debtQuery.roomId=$scope.room.roomId;
        $scope.checkInQuery.roomId=$scope.room.roomId;
        Service.getSelectSomeByPath('debt',$scope.debtQuery)
            .then(
            function(d){
                $scope.debtList=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
        Service.getSelectOneByPath('checkIn',$scope.checkInQuery)
            .then(
            function(d){
                $scope.checkIn=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
        Service.getAllByPath('time')
            .then(
            function(d){
                $scope.now=moment(d.nowTime);
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*权限处理*/
    };
    $scope.onLoad();
    /**
     * 界面交互的方法
     */
    /*判断是否加收房租*/
    $scope.ifRoomPriceAdd=function(){
        var a=$scope.roomPriceAdds;
        var l= a.length-1;
        for(l;l>-1;l--){
            var timeLimit=moment('2050-01-01 '+a[l].timeLimit);
            /*获取时间成功之后判断是否加收房租*/
            if(Util.getOtherParamMapValue('JSFZ')=='Y' && $scope.now.hour()>timeLimit.hour()){
                return true
            }
        }
        return false;
    };
    /*确认离店结算*/
    $scope.guestOutAction=function(){
        $scope.guestOut.roomIdList=[];
        $scope.guestOut.roomIdList.push($scope.room.roomId);
        $scope.guestOut.currency=$scope.currency.currencyCode;
        $scope.guestOut.userId=$scope.user.userId;
        Service.doAction('guestOut',$scope.guestOut)
            .then(
            function(d){
                /*结算成功转换房态*/
                $scope.$emit('refresh');
                /*关闭该页面*/
                $scope.closeGuestOut();
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        )
    };
    /*关闭*/
    $scope.closeGuestOut = function () {
        $scope.$emit('closePop','popGuestOut');
    }
}]);