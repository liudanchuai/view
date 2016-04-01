'use strict';

App.controller('MainController', ['$scope', 'MainService', function ($scope, MainService) {
    var self = this;
    /*房间对象，全部数组，显示数组*/
    self.room = {
        roomId: '',
        category: '',
        price: '',
        state:'',
        dirty: '',
        selfAccount: '',
        groupAccount: '',
        reachTime: '',
        leaveTime: '',
        gOrS: '',
        name: '',
        money: '',
        reserveId: ''
    };
    self.rooms = [];
    self.roomsShow = [];
    /*房间类型对象，数组，选中对象*/
    self.roomCategory = {
        categoryId: '',
        categoryCode: '',
        categoryName: ''
    };
    self.roomCategorys = [];
    self.roomCategorySelected = {
        name: '房间类别:全部',
        code: 'all'
    };
    /*房间状态全部数组，选中对象*/
    self.roomStates = [];
    self.roomStateSelected = {
        name: '房间状态:全部',
        code: 'all'
    };
    /**
     * 获取全部房间状态信息
     */
    self.fetchAllRooms = function () {
        MainService.fetchAllRooms()
            .then(
            function (d) {
                self.rooms = d;
                var l = self.rooms.length;
                for (var i = 0; i < l; i++) {
                    self.roomsShow[i] = self.rooms[i];
                }
            },
            function (errResponse) {
                console.error('Error while fetching rooms:' + errResponse.toString());
            }
        );
    };
    /**
     * 获取全部房间类别
     */
    self.fetchAllRoomCategory = function () {
        MainService.fetchAllRoomCategory()
            .then(
            function (d) {
                self.roomCategorys = d;
                self.roomCategorys.push({
                    categoryId: '100',
                    categoryCode: 'all',
                    categoryName: '全部'
                });
            },
            function (errResponse) {
                console.error('Error while fetching roomCategories:' + errResponse.toString());
            }
        );
    };
    /**
     * 获取全部房间状态
     */
    self.fetchAllRoomState = function () {
        MainService.fetchAllRoomState()
            .then(
            function (d) {
                self.roomStates = d;
                self.roomStates.push({
                    code: 'all',
                    name: '全部'
                })
            },
            function (errResponse) {
                console.error('Error while fetching roomStates:' + errResponse.toString())
            }
        )
    };
    /**
     *选择房间类型之后
     */
    self.choiceRoomCategory = function (c) {
        self.roomCategorySelected.name = '房间类别:' + c.categoryName;
        self.roomCategorySelected.code = c.categoryCode;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        self.roomSortBy();
    };
    /**
     * 选择房间状态之后
     */
    self.choiceRoomState = function (s) {
        self.roomStateSelected.name = '房间状态:' + s.name;
        self.roomStateSelected.code = s.code;
        //开始排序,先判断房间状态有没有选择，有选择的话要包含上
        self.roomSortBy();
    };
    self.roomSortBy = function () {
        var l = self.rooms.length;
        var j = 0;
        for (var i = 0; i < l; i++) {
            if (((self.rooms[i].state == self.roomStateSelected.code)||(self.roomStateSelected.code=='all')) && ((self.rooms[i].category == self.roomCategorySelected.code)||(self.roomCategorySelected.code=='all'))) {
                self.roomsShow[j] = self.rooms[i];
                j++;
            }
        }
        self.roomsShow.length = j;
    }

    self.fetchAllRooms();
    self.fetchAllRoomCategory();
    self.fetchAllRoomState();

}]);
