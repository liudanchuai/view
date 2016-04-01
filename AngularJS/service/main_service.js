'use strict';

App.factory('MainService', ['$http', '$q','host', function ($http, $q,host) {
    return {
        fetchAllRooms: function () {
            return $http.get(host+'/main/all/')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching all');
                    return $q.reject(errResponse);
                }
            );
        },
        fetchAllRoomCategory:function(){
            return $http.get(host+'/main/roomCategory')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching roomCategory');
                    return $q.reject(errResponse);
                }
            );
        },
        fetchAllRoomState:function(){
            return $http.get(host+'/main/roomState')
                .then(
                function (response) {
                    return response.data;
                },
                function (errResponse) {
                    console.error('Error while fetching roomState');
                    return $q.reject(errResponse);
                }
            );
        }
    };
}]);
