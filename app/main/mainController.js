'use strict';
/**
 * 主页控制器，主要负责初始化所有经常用到的系统参数,Service负责从服务器索取数据，Util提供一些本模块用到的方法
 */

App.controller('MainController', ['$scope', 'Service', 'Util', function ($scope, Service, Util) {
    /**
     * 声明基本变量
     */
    /*是否打开右键菜单*/
    $scope.opened=false;
    /*点选后选择的房间对象*/
    $scope.room = {};
    /*筛选后显示的房态*/
    $scope.roomsShow = [];
    /*选中的房间类别*/
    $scope.roomCategory = {
        name: '房间类别:全部',
        code: 'all'
    };
    /*选中的房间状态*/
    $scope.roomState = {
        name: '房间状态:全部',
        code: 'all'
    };
    /*操作员日志对象*/
    $scope.userLog={};
    /**
     * 初始化基础数据
     */
    $scope.onLoad =function() {
        /*获取全部房间类别*/
        Service.getAllByPath('roomCategory').then(function (d) {
            $scope.roomCategories = d;
            var l = $scope.roomCategories.length;
            /*初始化Map*/
            for (var i = 0; i < l; i++) {
                Util.pushMapValue($scope.roomCategories[i].categoryCode, $scope.roomCategories[i].categoryName);
                Util.pushMapValue($scope.roomCategories[i].categoryName, $scope.roomCategories[i].categoryCode);
            }
            $scope.roomCategories.push({
                categoryId: '100',
                categoryCode: 'all',
                categoryName: '全部'
            });
            /*获得room表中所有数据，等房类数据加载完了再加载房间定义*/
            Service.getAllByPath('room').then(function (d) {
                $scope.rooms = d;
                var l = $scope.rooms.length;
                for (var i = 0; i < l; i++) {
                    $scope.roomsShow[i] = $scope.rooms[i];
                    $scope.roomsShow[i].roomCategoryShow = Util.getMapValue($scope.roomsShow[i].roomCategory);
                }
            }, function (errResponse) {
                alert(errResponse.data.message);
            });
        }, function (errResponse) {
            alert(errResponse.data.message);
        });
        /*获取全部房间状态*/
        Service.getAllByPath('roomState').then(function (d) {
            $scope.roomStates = d;
            /*初始化Map*/
            var l = $scope.roomStates.length;
            for (var i = 0; i < l; i++) {
                Util.pushMapValue($scope.roomStates[i].code, $scope.roomStates[i].name);
                Util.pushMapValue($scope.roomStates[i].name, $scope.roomStates[i].code);
            }
            $scope.roomStates.push({
                code: 'all',
                name: '全部'
            })
        }, function (errResponse) {
            alert(errResponse.data.message);
        });
    };
    $scope.onLoad();
    /**
     *页面响应
     */
    /*房间类别下拉框响应事件*/
    $scope.choiceRoomCategory = function (c) {
        $scope.roomCategory.name = '房间类别:' + c.categoryName;
        $scope.roomCategory.code = c.categoryCode;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        $scope.roomSortBy();
    };
    /*房间状态下拉框响应事件*/
    $scope.choiceRoomState = function (s) {
        $scope.roomState.name = '房间状态:' + s.name;
        $scope.roomState.code = s.code;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        $scope.roomSortBy();
    };
    /*鼠标移动到盘态--用于右键菜单确定房间对象*/
    $scope.mouseEnter=function(r){
        $scope.room=angular.copy(r);
    };
    /*鼠标左键单击开放时间*/
    $scope.clickGuestIn = function (r) {
        if(r.state=='V'|| r.state=='L') {
            $scope.popGuestIn = true;
        }
    };
    /*鼠标左键单击离店结算按钮*/
    $scope.clickGuestOut=function(){
        $scope.popGuestOut=true
    };
    /*鼠标左键单击团队结算*/
    $scope.clickGuestOutGroup=function(){
        $scope.popGuestOutGroup=true;
    }
    /**
     * 私有方法
     */
    /*根据两个标签选择的值进行排序*/
    $scope.roomSortBy = function () {
        var l = $scope.rooms.length;
        var j = 0;
        for (var i = 0; i < l; i++) {
            if ((($scope.rooms[i].state == $scope.roomState.code) || ($scope.roomState.code == 'all')) && (($scope.rooms[i].category == $scope.roomCategory.code) || ($scope.roomCategory.code == 'all'))) {
                $scope.roomsShow[j] = $scope.rooms[i];
                j++;
            }
        }
        $scope.roomsShow.length = j;
    };

    /**
     * 广播接收
     */
    /*弹窗界面关闭方法,data为弹窗div中ng-if对应的变量*/
    $scope.$on('closePop',function(event,data){
       $scope[data]=false;
    });
    /*打开离店结算界面*/
    $scope.$on('popGuestOut',function(event,data){
        $scope.popGuestOut=true;
        $scope.room=data;
        alert($scope.room.roomId);
    });
    /*room*/
    $scope.$on('refresh', function (event) {
        $scope.onLoad();
    });
    /*user*/
    $scope.$on('user',function(event,data){
        $scope.user=data;
    })
}]);
