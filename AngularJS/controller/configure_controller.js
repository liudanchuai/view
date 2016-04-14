/**
 * Created by Administrator on 2016-04-13.
 * App.controller('MainController', ['$scope', 'MainService', function ($scope, MainService) {
 */
'use strict';

App.controller('ConfigureController', ['$scope', 'ConfigureService', function ($scope, ConfigureService) {

    $scope.rooms = [];//房间定义
    $scope.roomCategories = [];//房间类别
    $scope.protocols = [];//协议房价
    $scope.protocolMaps = [];//协议映射----协议房价从表
    $scope.otherParams = [];//其他参数
    $scope.guestSources = [];//客源
    $scope.currencies = [];//币种
    $scope.companyCards = [];//单位帐卡
    $scope.companyLords = [];//单位签单人----单位帐卡从表 3列
    $scope.aaa = 1;
    /**
     * 操作员
     */
    $scope.users = [];//操作员表
    $scope.userChoice = 'update';//操作员表
    $scope.userPost = {
        id:'',
        userId: '',
        userName: '',
        userPassword: '',
        userCategory: '',
        userLevel: '',
        posNumber: ''
    };
    $scope.getAllUsers = function () {
        ConfigureService.getAllUsers()
            .then(
            function (d) {
                $scope.users = d;
            },
            function (errResponse) {
                console.error('Error while getting users:' + errResponse.toString());
            }
        );
    };
    $scope.createUsers = function () {
        ConfigureService.createUsers($scope.userPost)
            .then(
            function (d) {
                $scope.getAllUsers();
            },
            function (errResponse) {
                console.error('Error while creating users' + errResponse.toString());
            }
        )
    };
    $scope.deleteUsers = function (id) {
        ConfigureService.deleteUsers(id)
            .then(
            function (d) {
                $scope.getAllUsers();
            },
            function (errResponse) {
                console.error('Error while creating users' + errResponse.toString());
            }
        );
    };
    $scope.updateUsers = function (user) {
        ConfigureService.updateUsers(user)
            .then(
            function (d) {
                $scope.getAllUsers();
            },
            function (errResponse) {
                console.error('Error while creating users' + errResponse.toString());
            }
        );
    };
    /*点击编辑*/
    $scope.updateClick = function(){
        $scope.userChoice='post';

    };
    /**
     * 房间定义
     */
        $scope.getAllRooms = function () {
            ConfigureService.getAllRooms()
                .then(
                function (d) {
                    $scope.rooms = d;
                },
                function (errResponse) {
                    console.error('Error while getting rooms:' + errResponse.toString());
                }
            );
        };
    /**
     * 房间类别
     */
    $scope.getAllRoomCategories = function () {
        ConfigureService.getAllRoomCategories()
            .then(
            function (d) {
                $scope.roomCategories = d;
            },
            function (errResponse) {
                console.error('Error while getting roomCategories:' + errResponse.toString());
            }
        );
    };
    /**
     * 协议房价
     */
    $scope.getAllProtocols = function () {
        ConfigureService.getAllProtocols()
            .then(
            function (d) {
                $scope.protocols = d;
            },
            function (errResponse) {
                console.error('Error while getting protocols:' + errResponse.toString());
            }
        );
    };
    /**
     * 协议映射
     */
    $scope.getAllProtocolMaps = function () {
        ConfigureService.getAllProtocolMaps()
            .then(
            function (d) {
                $scope.protocolMaps = d;
            },
            function (errResponse) {
                console.error('Error while getting protocolMaps:' + errResponse.toString());
            }
        );
    };
    /**
     * 其他参数
     */
    $scope.getAllOtherParams = function () {
        ConfigureService.getAllOtherParams()
            .then(
            function (d) {
                $scope.otherParams = d;
            },
            function (errResponse) {
                console.error('Error while getting otherParams:' + errResponse.toString());
            }
        );
    };
    /**
     * 客源
     */
    $scope.getAllGuestSources = function () {
        ConfigureService.getAllGuestSources()
            .then(
            function (d) {
                $scope.guestSources = d;
            },
            function (errResponse) {
                console.error('Error while getting guestSources:' + errResponse.toString());
            }
        );
    };
    /**
     * 币种
     */
    $scope.getAllCurrencies = function () {
        ConfigureService.getAllCurrencies()
            .then(
            function (d) {
                $scope.currencies = d;
            },
            function (errResponse) {
                console.error('Error while getting currencies:' + errResponse.toString());
            }
        );
    };
    /**
     * 单位帐卡
     */
    $scope.getAllCompanyCards = function () {
        ConfigureService.getAllCompanyCards()
            .then(
            function (d) {
                $scope.companyCards = d;
            },
            function (errResponse) {
                console.error('Error while getting companyCards:' + errResponse.toString());
            }
        );
    };
    /**
     * 单位签单人
     */
    $scope.getAllCompanyLords = function () {
        ConfigureService.getAllCompanyLords()
            .then(
            function (d) {
                $scope.companyLords = d;
            },
            function (errResponse) {
                console.error('Error while getting companyLords:' + errResponse.toString());
            }
        );
    };


    /*页面加载之后调用的方法*/
    $scope.getAllUsers();
    $scope.getAllRooms();
    $scope.getAllRoomCategories();
    $scope.getAllProtocols();
    $scope.getAllProtocolMaps();
    $scope.getAllOtherParams();
    $scope.getAllGuestSources();
    $scope.getAllCurrencies();
    $scope.getAllCompanyCards();
    $scope.getAllCompanyLords();
}]);
