'use strict';

var App = angular.module("mainApp", ['ngRoute']);
App.constant('host', 'http://192.168.1.77:8080');
App.config(['$httpProvider', function ($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);
App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/mainState', {
                templateUrl: 'mainState/mainState.html',
                controller: 'MainStateController'
            }).
            when('/settings', {
                templateUrl: 'setting/setting.html',
                controller:'SettingController'
            }).
            when('/guestInGroup',{
                templateUrl:'guestInGroup/guestInGroup.html',
                controller:'GuestInGroupController'
            }).
            otherwise({
                redirectTo: '/mainState'
            });
    }]);

