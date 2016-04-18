/**
 * 用户登录
 */
'use strict';

App.controller('LoginController', ['$scope', 'Service', function ($scope, Service) {
    /*登录验证*/
    $scope.loginCheck = function(user){
        Service.getSelectByPath(user,'user')
            .then(
            function (d) {
                if (d[0].userLevel==null){
                    alert("用户名或密码错误");
                }else{
                    sessionStorage.setItem("userId", d[0].userId);
                    sessionStorage.setItem("userName", d[0].userName);
                    sessionStorage.setItem("userPassword", d[0].userPassword);
                    sessionStorage.setItem("userCategory", d[0].userCategory);
                    sessionStorage.setItem("userLevel", d[0].userLevel);
                    sessionStorage.setItem("posNumber", d[0].posNumber);
                    window.location.href="table.html";
                }
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
}]);