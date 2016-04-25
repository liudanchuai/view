/**
 * Created by Administrator on 2016-04-22.
 */
/**
 * 单击之后弹出弹窗
 */
App.directive('szPop', function ($compile) {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            angular.element(document.body).append('<div id="sz-popup-frame"></div>');
            angular.element(document.getElementById('sz-popup-frame')).append($compile(angular.element('<div ng-include="\'' + attrs.szPop + '\'"></div>'))(scope));
            scope.$apply();
        });
    };
});

app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});