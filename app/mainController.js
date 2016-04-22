'use strict';
/**
 * 没有显式初始化的对象
 * rooms[]
 * roomCategories[]
 * roomStates[]
 * roomsShow[i].temp1:用于显示的临时对象1
 */
App.controller('MainController', ['$scope', 'Service','Util', function ($scope, Service,Util) {
    /**
     * 声明基本变量
     */
    /*点选后选择的房间对象*/
    $scope.roomSelected = {};
    /*筛选后显示的房态*/
    $scope.roomsShow = [];
    /*选中的房间类别*/
    $scope.roomCategorySelected = {
        name: '房间类别:全部',
        code: 'all'
    };
    /*选中的房间状态*/
    $scope.roomStateSelected = {
        name: '房间状态:全部',
        code: 'all'
    };
    /**
     * 初始化基础数据
     */
    /*获取全部房间类别*/
    Service.getAllByPath('roomCategory').then(function (d) {
        $scope.roomCategories = d;
        var l=$scope.roomCategories.length;
        /*初始化Map*/
        for(var i=0;i<l;i++){
            Util.pushMapValue($scope.roomCategories[i].categoryCode,$scope.roomCategories[i].categoryName);
            Util.pushMapValue($scope.roomCategories[i].categoryName,$scope.roomCategories[i].categoryCode);
        }
        $scope.roomCategories.push({
            categoryId: '100',
            categoryCode: 'all',
            categoryName: '全部'
        });
    }, function (errResponse) {
        alert(errResponse.data.message);
    });
    /*获得room表中所有数据*/
    Service.getAllByPath('room').then(function (d) {
        $scope.rooms = d;
        var l = $scope.rooms.length;
        for (var i = 0; i < l; i++) {
            $scope.roomsShow[i] = $scope.rooms[i];
            $scope.roomsShow[i].temp1=Util.getMapValue($scope.roomsShow[i].roomCategory);
        }
    }, function (errResponse) {
        alert(errResponse.data.message);
    });
    /*获取全部房间状态*/
    Service.getAllByPath('roomState').then(function (d) {
        $scope.roomStates = d;
        /*初始化Map*/
        var l =$scope.roomStates.length;
        for(var i=0;i<l;i++){
            Util.pushMapValue($scope.roomStates[i].code,$scope.roomStates[i].name);
            Util.pushMapValue($scope.roomStates[i].name,$scope.roomStates[i].code);
        }
        $scope.roomStates.push({
            code: 'all',
            name: '全部'
        })
    }, function (errResponse) {
        alert(errResponse.data.message);
    });
    /**
     *页面响应
     */
    /*房间类别下拉框响应事件*/
    $scope.choiceRoomCategory = function (c) {
        $scope.roomCategorySelected.name = '房间类别:' + c.categoryName;
        $scope.roomCategorySelected.code = c.categoryCode;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        $scope.roomSortBy();
    };
    /*房间状态下拉框响应事件*/
    $scope.choiceRoomState = function (s) {
        $scope.roomStateSelected.name = '房间状态:' + s.name;
        $scope.roomStateSelected.code = s.code;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        $scope.roomSortBy();
    };
    /*左键单击房间开房*/
    $scope.GuestIn = function (r) {
        $scope.room.roomId = r.roomId;
    };
    /**
     * 私有方法
     */
    /*根据两个标签选择的值进行排序*/
    $scope.roomSortBy = function () {
        var l = $scope.rooms.length;
        var j = 0;
        for (var i = 0; i < l; i++) {
            if ((($scope.rooms[i].state == $scope.roomStateSelected.code) || ($scope.roomStateSelected.code == 'all')) && (($scope.rooms[i].category == $scope.roomCategorySelected.code) || ($scope.roomCategorySelected.code == 'all'))) {
                $scope.roomsShow[j] = $scope.rooms[i];
                j++;
            }
        }
        $scope.roomsShow.length = j;
    };

    /**
     * 广播接收
     */
    /*room*/
    $scope.$on('room', function (event, data) {
        $scope.roomsShow[0].roomId = data.qwe;
    })

}]);
