/**
 * Created by Administrator on 2016-04-25.
 */
App.directive('szRightClick', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            var menuElement = angular.element(document.getElementById(attrs.szRightClick));
            element.bind('contextmenu', function (event) {
                $scope.$apply(function () {
                    event.preventDefault();
                    menuElement.css('display','block');
                });
            });
            angular.element($window).bind('click', function (event) {
                    $scope.$apply(function () {
                        event.preventDefault();
                        menuElement.css('display','none');
                    });
            });
        }
    };
}]);