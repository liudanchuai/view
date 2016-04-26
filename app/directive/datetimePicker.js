/**
 * Created by Administrator on 2016-04-26.
 * jquery日期控件绑定
 */
App.directive("datetimepicker",function(){
    return {
        restrict: "EA",
        require : "ngModel",
        link: function (scope, element, attrs, ctrl) {

            var unregister = scope.$watch(function(){

                $(element).append("<input id='datetimepicker1'" +
                    "value='"+ctrl.$modelValue+"'>");
                $(element).css("padding","0");

                element.on('change', function() {
                    scope.$apply(function() {
                        ctrl.$setViewValue($("#datetimepicker1").val());
                    });
                });

                element.on('click',function(){
                    $("#datetimepicker1").datetimepicker({
                        onClose : function(){
                            element.change();
                        }
                    });
                });

                //element.click();

                return ctrl.$modelValue;
            }, initialize);

            function initialize(value){
                ctrl.$setViewValue(value);
                unregister();
            }
        }
    }
});
