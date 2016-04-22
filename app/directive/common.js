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

/*
/!*展开 隐藏*!/
App.directive('szToggle', function () {
    return function (scope, element) {
        element.bind("click", function () {
            var other=angular.element(document.getElementsByClassName("divOther"));
            var btnopen=angular.element(document.getElementsByClassName("btnOpen"));
            var isOne = true;
            if (other.is(":hidden")) {  //jquery
                other.show();
                btnopen.html('隐藏');
                if(isOne){
                    szAddCustomer="";
                    isOne=false;
                }
            }
            else {
                other.hide();
                btnopen.html('展开');
            }
        });
    }
});*/


