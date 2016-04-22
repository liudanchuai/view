/**
 * Created by Administrator on 2016-04-22.
 */

/*增加数量*/
App.directive('szAdd', function () {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            var Day=angular.element(document.getElementById(attrs.szAdd));
            var days = parseInt(Day.val());
            if (days < 30) {
                Day.val(days + 1);
                Day.blur();
            }
        });
    }
});

/*减少数量*/
App.directive('szMinus', function () {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            var Day=angular.element(document.getElementById(attrs.szMinus));
            var days = parseInt(Day.val());
            if (days > 1) {
                Day.val(days - 1);
                Day.blur();
            }
        });
    }
});

/*展开 隐藏*/

