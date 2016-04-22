/**
 * Created by Administrator on 2016-04-22.
 * 单击之后返回主界面
 */
App.directive('szBack', function () {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            angular.element(document.getElementById('np-pop-iframe')).remove();
        });
    }
});