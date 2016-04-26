/**
 * Created by Administrator on 2016-04-24.
 * 主页面控制器，初始化常用数据
 * 通用的命名规则：根据实体类和表名(一样的)，复数形式为从服务器获取来的数组，单数形式为当前选中的正在操作的对象
 * 通用后缀Show：根据前边单词的单复数形式来判断是数组还是对象，主要负责用于显示的东西，不与持久层数据发生关系
 * 通用前缀pop：判断弹窗是否弹出，存在于ng-if当中，用来判断当前ng-include是否执行
 * 特殊变量--试题中不存在的变量：
 * roomsShow[i]/room.roomCategoryShow：由于房间定义只有房类代码，所以这里Show是用于显示的，也就是中文
 */
App.controller('Index',['$scope','Service','Util', function($scope,Service,Util) {
    /**
     * 调试期临时变量
     */
    $scope.user={};
    /**
     * 页面加载就执行的方法
     */
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
        /*获取小时房定义*/
        Service.getAllByPath('hourRoom')
            .then(
            function(d){
                $scope.hourRooms=d;
            },
            function(errResponse){
                alert(errResponse.data.message);
            }
        );
        /**
         * 常量数组
         */
        /*性别*/
        $scope.sexes=['男','女'];
    };
    $scope.onLoad();
}]);