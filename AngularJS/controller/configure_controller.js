/**
 * Created by Administrator on 2016-04-13.
 * App.controller('MainController', ['$scope', 'MainService', function ($scope, MainService) {
 */
'use strict';

App.controller('ConfigureController',['$scope','ConfigureService',function($scope,ConfigureService){
    var self = this;
    self.users = [];//操作员表
    self.rooms = [];//房间定义
    self.roomCategories = [];//房间类别
    self.protocols = [];//协议房价
    self.protocolMaps = [];//协议映射----协议房价从表
    self.otherParams = [];//其他参数
    self.guestSources = [];//客源
    self.currencies = [];//币种
    self.companyCards = [];//单位帐卡
    self.companyLords = [];//单位签单人----单位帐卡从表 3列
    /**
     * 操作员
     */
    self.getAllUsers = function () {
        ConfigureService.getAllUsers()
            .then(
            function (d) {
                self.users = d;
            },
            function (errResponse) {
                console.error('Error while getting users:' + errResponse.toString());
            }
        );
    };
    /**
     * 房间定义
     */
    self.getAllRooms = function () {
        ConfigureService.getAllRooms()
            .then(
            function (d) {
                self.rooms = d;
            },
            function (errResponse) {
                console.error('Error while getting rooms:' + errResponse.toString());
            }
        );
    };
    /**
     * 房间类别
     */
    self.getAllRoomCategories = function () {
        ConfigureService.getAllRoomCategories()
            .then(
            function (d) {
                self.roomCategories = d;
            },
            function (errResponse) {
                console.error('Error while getting roomCategories:' + errResponse.toString());
            }
        );
    };
    /**
     * 协议房价
     */
    self.getAllProtocols = function () {
        ConfigureService.getAllProtocols()
            .then(
            function (d) {
                self.protocols = d;
            },
            function (errResponse) {
                console.error('Error while getting protocols:' + errResponse.toString());
            }
        );
    };
    /**
     * 协议映射
     */
    self.getAllProtocolMaps = function () {
        ConfigureService.getAllProtocolMaps()
            .then(
            function (d) {
                self.protocolMaps = d;
            },
            function (errResponse) {
                console.error('Error while getting protocolMaps:' + errResponse.toString());
            }
        );
    };
    /**
     * 其他参数
     */
    self.getAllOtherParams = function () {
        ConfigureService.getAllOtherParams()
            .then(
            function (d) {
                self.otherParams = d;
            },
            function (errResponse) {
                console.error('Error while getting otherParams:' + errResponse.toString());
            }
        );
    };
    /**
     * 客源
     */
    self.getAllGuestSources = function () {
        ConfigureService.getAllGuestSources()
            .then(
            function (d) {
                self.guestSources = d;
            },
            function (errResponse) {
                console.error('Error while getting guestSources:' + errResponse.toString());
            }
        );
    };
    /**
     * 币种
     */
    self.getAllCurrencies = function () {
        ConfigureService.getAllCurrencies()
            .then(
            function (d) {
                self.currencies = d;
            },
            function (errResponse) {
                console.error('Error while getting currencies:' + errResponse.toString());
            }
        );
    };
    /**
     * 单位帐卡
     */
    self.getAllCompanyCards = function () {
        ConfigureService.getAllCompanyCards()
            .then(
            function (d) {
                self.companyCards = d;
            },
            function (errResponse) {
                console.error('Error while getting companyCards:' + errResponse.toString());
            }
        );
    };
    /**
     * 单位签单人
     */
    self.getAllCompanyLords = function () {
        ConfigureService.getAllCompanyLords()
            .then(
            function (d) {
                self.companyLords = d;
            },
            function (errResponse) {
                console.error('Error while getting companyLords:' + errResponse.toString());
            }
        );
    };


    /*页面加载之后调用的方法*/
    self.getAllUsers();
    self.getAllRooms();
    self.getAllRoomCategories();
    self.getAllProtocols();
    self.getAllProtocolMaps();
    self.getAllOtherParams();
    self.getAllGuestSources();
    self.getAllCurrencies();
    self.getAllCompanyCards();
    self.getAllCompanyLords();
}]);
