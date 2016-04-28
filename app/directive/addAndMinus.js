/**
 * Created by Administrator on 2016-04-22.
 */

/*增加数量*/
App.directive('szAdd', function () {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            var Count = angular.element(document.getElementById(attrs.szAdd));
            var Counts = parseInt(Count.val());
            if (Counts < 30) {
                Count.val(Counts + 1);
                Count.blur();
            }
        });
    }
});

/*减少数量*/
App.directive('szMinus', function () {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            var Count = angular.element(document.getElementById(attrs.szMinus));
            var Counts = parseInt(Count.val());
            if (Counts > 1) {
                Count.val(Counts - 1);
                Count.blur();
            }
        });
    }
});
