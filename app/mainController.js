'use strict';
/**
 * 主页控制器，主要负责初始化所有经常用到的系统参数,Service负责从服务器索取数据，Util提供一些本模块用到的方法
 * 通用的命名规则：根据实体类和表名(一样的)，复数形式为从服务器获取来的数组，单数形式为当前选中的正在操作的对象
 * 通用后缀Show：根据前边单词的单复数形式来判断是数组还是对象，主要负责用于显示的东西，不与持久层数据发生关系
 * 特殊变量--试题中不存在的变量：
 * roomsShow[i]/room.roomCategoryShow：由于房间定义只有房类代码，所以这里Show是用于显示的，也就是中文
 */

App.controller('MainController', ['$scope','$compile', 'Service', 'Util', function ($scope,$compile, Service, Util) {
    /**
     * 调试期临时变量
     */
    $scope.user={};
    /**
     * 声明基本变量
     */
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
        /*如果没有登录，先登录*/
        if ($scope.user == null) {
            angular.element(document.body).append('<div id="sz-popup-frame"></div>')
            angular.element(document.getElementById('sz-popup-frame')).append($compile(angular.element('<div ng-include="\'login/login.html\'"></div>'))($scope));
        }
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
        /*获得客源数组*/
        Service.getAllByPath('guestSource')
            .then(
            function (d) {
                $scope.guestSources = d;
                /*初始化Map*/
                var l = $scope.guestSources.length;
                for (var i = 0; i < l; i++) {
                    Util.pushMapValue($scope.guestSources[i].sourceCode, $scope.guestSources[i].sourceName);
                    Util.pushMapValue($scope.guestSources[i].sourceName, $scope.guestSources[i].sourceCode);
                }
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得协议价数组*/
        Service.getAllByPath('protocol')
            .then(
            function (d) {
                $scope.protocols = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得房租方式数组*/
        Service.getAllByPath('roomPriceCategory')
            .then(
            function (d) {
                $scope.roomPriceCategories = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得证件类别数组*/
        Service.getAllByPath('cardCategory')
            .then(
            function(d){
                $scope.cardCategories=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
        /*获得币种类别数组*/
        Service.getAllByPath('currency')
            .then(
            function(d){
                $scope.currencies=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
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
    /*左键单击房间开房*/
    $scope.GuestIn = function (r) {
        $scope.room = angular.copy(r);
    };
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
    /*room*/
    $scope.$on('refresh', function (event) {
        $scope.onLoad();
    });
    /*user*/
    $scope.$on('user',function(event,data){
        $scope.user=data;
    })
}]);
