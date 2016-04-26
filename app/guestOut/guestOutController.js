/**
 * Created by Administrator on 2016-04-26.
 * 离店结算
 */
App.controller('GuestOutController', ['$scope', 'Service', 'Util', function ($scope, Service, Util) {
    /**
     * 用于提交的对象
     */
    /*消费明细数组*/
    $scope.debtList=[];
    /*结账记录数组*/
    $scope.debtPay=[];
    /*离店明细对象*/
    $scope.checkOut={};
    /*离店团队房明细数组（散客离店则为空）*/
    $scope.checkOutGroupRoom={};
    /**
     * 初始化数据
     */
    $scope.onload=function(){

    };
    /**
     * 界面交互的方法
     */
    /*关闭*/
    $scope.closeGuestOut = function () {
        $scope.$emit('closePop','popGuestOut');
    }
}]);