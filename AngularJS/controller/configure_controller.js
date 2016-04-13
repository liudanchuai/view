/**
 * Created by Administrator on 2016-04-13.
 * App.controller('MainController', ['$scope', 'MainService', function ($scope, MainService) {
 */
'use strict';

App.controller('ConfigureController',['$scope','ConfigureService',function($scope,ConfigureService){
    var self = this;
    self.users = [];
    /**
     * 获取全部操作员信息
     */
    self.getAllUser = function () {
        ConfigureService.getAllUser()
            .then(
            function (d) {
                self.users = d;
            },
            function (errResponse) {
                console.error('Error while getting users:' + errResponse.toString());
            }
        );
    };
}])