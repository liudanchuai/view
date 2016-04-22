/**
 * Created by Administrator on 2016-04-22.
 */
/**
 * 单击之后弹出弹窗
 */
App.directive('szPop', function ($compile) {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            if(scope.clickNum==null){
                scope.clickNum=0;
                angular.element(document.body).append('<div id="sz-popup-frame"></div>')
            }
            scope.clickNum++;
            if(scope.clickNum>5){
                scope.clickNum=0;
                angular.element(document.getElementById('sz-popup-frame')).remove();
                angular.element(document.body).append('<div id="sz-popup-frame"></div>')
            }
            angular.element(document.getElementById('sz-popup-frame')).append($compile(angular.element('<div ng-include="\'' + attrs.szPop + '\'" id="np-pop-iframe"></div>'))(scope));
            scope.$apply();
        });
    };
});