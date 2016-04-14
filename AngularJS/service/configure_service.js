/**
 * Created by Administrator on 2016-04-13.
 * 操作员定义
 * App.factory('MainService', ['$http', '$q','host', function ($http, $q,host) {
 */
'use strict';

App.factory('ConfigureService', ['$http', '$q', 'host', function ($http, $q, host) {
    return {
        /**
         * 操作员
         */
        getAllUsers:function(){
            return $http.get(host+'/user')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all user');
                    return $q.reject(errResponse);
                }
            );
        },
        createUsers:function(users){
            return $http.post(host+'/user',users)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while creating user');
                    return $q.reject(errResponse);
                }
            );
        },
        updateUsers:function(users){
            return $http.put(host+'/user',users)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while updating user');
                    return $q.reject(errResponse);
                }
            );
        },
        deleteUsers:function(id){
            return $http.delete(host+'/user/'+id)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while deleting user');
                    return $q.reject(errResponse);
                }
            );
        },

        /**
         * 房间定义
         */
        getAllRooms:function(){
            return $http.get(host+'/room')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all rooms');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 房间类别
         */
        getAllRoomCategories:function(){
            return $http.get(host+'/roomCategory')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all roomCategories');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 协议房价
         */
        getAllProtocols:function(){
            return $http.get(host+'/protocol')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all protocols');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 协议映射
         */
        getAllProtocolMaps:function(){
            return $http.get(host+'/protocolMap')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all protocolMaps');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 其他参数
         */
        getAllOtherParams:function(){
            return $http.get(host+'/otherParam')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all otherParams');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 客源
         */
        getAllGuestSources:function(){
            return $http.get(host+'/guestSource')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all guestSources');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 币种
         */
        getAllCurrencies:function(){
            return $http.get(host+'/currency')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all currencies');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 单位帐卡
         */
        getAllCompanyCards:function(){
            return $http.get(host+'/companyCard')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all companyCards');
                    return $q.reject(errResponse);
                }
            );
        },
        /**
         * 单位签单人
         */
        getAllCompanyLords:function(){
            return $http.get(host+'/companyLord')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all companyLords');
                    return $q.reject(errResponse);
                }
            );
        }

    }
}]);