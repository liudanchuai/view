/**
 * Created by Administrator on 2016-04-25.
 */
App.directive('szRightClick', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            function mouseCoords(ev)
            {
                if(ev.pageX || ev.pageY){
                    return {x:ev.pageX, y:ev.pageY};
                }
                return{
                    x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                    y:ev.clientY + document.body.scrollTop - document.body.clientTop
                };
            }
            var menuElement = angular.element(document.getElementById(attrs.szRightClick));
            var backgroundWhite = angular.element(document.getElementsByClassName('bgblack'));
            element.bind('contextmenu', function (event) {
                $scope.$apply(function () {
                    event.preventDefault();
                    var mousePos=mouseCoords(event);
                    menuElement.css('left',mousePos.x);
                    menuElement.css('top',mousePos.y);
                    menuElement.css('display','block');
                    backgroundWhite.css('display','block');
                });
            });
            angular.element($window).bind('click', function (event) {
                    $scope.$apply(function () {
                        event.preventDefault();
                        menuElement.css('display','none');
                        backgroundWhite.css('display','none');
                    });
            });
        }
    };
}]);