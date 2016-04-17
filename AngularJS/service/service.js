'use strict';

App.factory('Service', ['$http', '$q','host', function ($http, $q,host) {
    return {
        /*增*/
        createByPath:function(object,path){
            return $http.post(host+'/'+path,object)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
        /*删*/
        deleteByPath:function(id,path){
            return $http.delete(host+'/'+path+'/'+id)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
        /*改*/
        updateByPath:function(object,path){
            return $http.put(host+'/'+path,object)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
        /*查*/
        getAllByPath:function(path){
            return $http.get(host+'/'+path)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                }
            );
        },
        getSelectByPath:function(object,path){
            return $http.post(host+'/'+path+'/selectSome',object)
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                }
            );
        }
    };
}]);
