/**
 * 用户登录
 */
'use strict';

App.controller('LoginController', ['$scope', 'Service', function ($scope, Service) {
    /*登录验证*/
    $scope.loginCheck = function(user){
        Service.doAction('login',user)
            .then(
            function (d) {
                if (d==""){
                    alert("用户名或密码错误");
                }else{
                    $scope.$emit('user',d);
                    angular.element(document.getElementById('sz-popup-frame')).remove();
                }
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
}]);