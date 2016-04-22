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
                    sessionStorage.setItem("user",JSON.stringify(d));
                    /*sessionStorage.setItem("userId", d.userId);
                    sessionStorage.setItem("userName", d.userName);
                    sessionStorage.setItem("userPassword", d.userPassword);
                    sessionStorage.setItem("userCategory", d.userCategory);
                    sessionStorage.setItem("userLevel", d.userLevel);
                    sessionStorage.setItem("posNumber", d.posNumber);*/
                    window.location.href="table.html";
                }
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
}]);