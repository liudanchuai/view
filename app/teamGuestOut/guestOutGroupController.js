/**
 * Created by Administrator on 2016-04-27.
 */
App.controller('GuestOutGroupController',['$scope',function($scope){
    /*关闭*/
    $scope.closeGuestOutGroup = function () {
        $scope.$emit('closePop','popGuestOutGroup');
    }
}]);