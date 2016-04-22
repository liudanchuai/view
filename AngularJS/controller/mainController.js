'use strict';

App.controller('MainController',['$scope','Service',  function ($scope, Service) {
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
     * 获取全部房间状态信息
     */
    $scope.getAllMainState = function () {
        Service.getAllByPath('mainState')
            .then(
            function (d) {
                $scope.rooms = d;
                var l = $scope.rooms.length;
                for (var i = 0; i < l; i++) {
                    $scope.roomsShow[i] = $scope.rooms[i];
                }
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    /**
     * 获取全部房间类别
     */
    $scope.getAllRoomCategory = function () {
        Service.getAllByPath('roomCategory')
            .then(
            function (d) {
                $scope.roomCategories = d;
                $scope.roomCategories.push({
                    categoryId: '100',
                    categoryCode: 'all',
                    categoryName: '全部'
                });
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    /**
     * 获取全部房间状态
     */
    $scope.getAllRoomState = function () {
        Service.getAllByPath('roomState')
            .then(
            function (d) {
                $scope.roomStates = d;
                $scope.roomStates.push({
                    code: 'all',
                    name: '全部'
                })
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    /**
     *选择房间类型之后
     */
    $scope.choiceRoomCategory = function (c) {
        $scope.roomCategorySelected.name = '房间类别:' + c.categoryName;
        $scope.roomCategorySelected.code = c.categoryCode;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        $scope.roomSortBy();
    };
    /**
     * 选择房间状态之后
     */
    $scope.choiceRoomState = function (s) {
        $scope.roomStateSelected.name = '房间状态:' + s.name;
        $scope.roomStateSelected.code = s.code;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        $scope.roomSortBy();
    };
    /**
     * 根据两个标签选择的值进行排序
     */
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
     * 左键单击房间开房
     */
    $scope.GuestIn = function(r){
        sessionStorage.setItem("roomId", r.roomId);
        sessionStorage.setItem("categoryName", r.categoryName);
        $(top.document.body).append('<iframe src="reception/GuestIn.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
    };

    $scope.getAllMainState();
    $scope.getAllRoomCategory();
    $scope.getAllRoomState();

}]);
