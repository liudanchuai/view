/**
 * Created by Administrator on 2016-04-24.
 * 主页面控制器，初始化常用数据
 */
App.controller('Index',['$scope','Service','Util', function($scope,Service,Util) {
    /**
     * 调试期临时变量
     */
    $scope.user={};
    $scope.onLoad =function() {
        /*如果没有登录，先登录*/
        if ($scope.user == null) {
            angular.element(document.body).append('<div id="sz-popup-frame"></div>')
            angular.element(document.getElementById('sz-popup-frame')).append($compile(angular.element('<div ng-include="\'login/login.html\'"></div>'))($scope));
        }
        /*获得客源数组*/
        Service.getAllByPath('guestSource')
            .then(
            function (d) {
                $scope.guestSources = d;
                /*初始化Map*/
                var l = $scope.guestSources.length;
                for (var i = 0; i < l; i++) {
                    Util.pushMapValue($scope.guestSources[i].sourceCode, $scope.guestSources[i].sourceName);
                    Util.pushMapValue($scope.guestSources[i].sourceName, $scope.guestSources[i].sourceCode);
                }
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得协议价数组*/
        Service.getAllByPath('protocol')
            .then(
            function (d) {
                $scope.protocols = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得房租方式数组*/
        Service.getAllByPath('roomPriceCategory')
            .then(
            function (d) {
                $scope.roomPriceCategories = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
        /*获得证件类别数组*/
        Service.getAllByPath('cardCategory')
            .then(
            function(d){
                $scope.cardCategories=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
        /*获得币种类别数组*/
        Service.getAllByPath('currency')
            .then(
            function(d){
                $scope.currencies=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
    };
    $scope.onLoad();
}]);