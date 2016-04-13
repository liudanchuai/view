/**
 * Created by Administrator on 2016-04-13.
 * 操作员定义
 * App.factory('MainService', ['$http', '$q','host', function ($http, $q,host) {
 */
'use strict';

App.factory('ConfigureService', ['$http', '$q', 'host', function ($http, $q, host) {
    return {
        getAllUser:function(){
            return $http.get(host+'/user')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all');
                    return $q.reject(errResponse);
                }
            );
        }
    }
}])