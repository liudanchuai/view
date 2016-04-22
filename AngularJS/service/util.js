App.factory('Service', ['$http', '$q','host', function ($http, $q,host) {
    return {
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
        /*根据条件查找*/
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
        },
        /*进行逻辑业务操作*/
        doAction:function(path,object){
            return $http.post(host+'/'+path,object)
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