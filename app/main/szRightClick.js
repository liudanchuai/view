/**
 * Created by Administrator on 2016-04-25.
 */
App.directive('szRightClick', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            $scope.mainStateOpened = false;
            $scope.guestOut=function(room){
                $scope.$emit('popGuestOut',room);
            };
            $scope.takeDeposit=function(){
                alert(room.roomId);
            };
            $scope.otherItem=function(){
                alert(room.roomId);
            };
            element.bind('contextmenu', function (event) {
                $scope.$apply(function () {
                    event.preventDefault();
                    $scope.mainStateOpened=true;
                    $scope.$emit('mainStateOpened',true);
                });
            });
            angular.element($window).bind('click', function (event) {
                if ($scope.mainStateOpened) {
                    $scope.$apply(function () {
                        event.preventDefault();
                        $scope.mainStateOpened=false;
                    });
                }
            });
        }
    };
}]);