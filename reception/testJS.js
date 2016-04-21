    (function(){
        $(".bgblack,.sbegray").on("click",function(){
//$(window.parent.document.getElementById("np-pop-iframe")).remove();
            $("#np-pop-iframe",window.parent.document).remove();
        });
    })(jQuery);
//预住天数事件绑定
$(".addDays").click(function () {
    var days = parseInt($("#Days").val());
    if (days < 30) {
        $("#Days").val(days + 1);
        $("#Days").blur();
        getTotalAccount();//显示总房价
    }
});
$(".reduceDays").click(function () {
    var days = parseInt($("#Days").val());
    if (days > 1) {
        $("#Days").val(days - 1);
        $("#Days").blur();
        getTotalAccount();//显示总房价
    }
});
//随客绑定事件
var isOne = true;   //执行一次
$(".btnOpenCustomer").click(function () {
    if ($(".divOtherCustomer").is(":hidden")) {
        $(".divOtherCustomer").show();
        $(".btnOpenCustomer").html('隐藏');
        if (isOne) {
            $(".btnAddOtherCustomer").click();
            isOne = false;
        }
    }
    else {
        $(".divOtherCustomer").hide();
        $(".btnOpenCustomer").html('展开');
    }
});
//添加随客
$(".btnAddOtherCustomer").click(function () {
    if ($(".ruzhu tbody tr").length >= 4) {
        alert("同一个房间最多只能新增4个随客");
        return;
    }
    var trobj = $($("#divEditRow tbody").html());
    $(".ruzhu tbody").append(trobj);
});
function RowDelete(obj) {
    var trobj = $(obj).parent().parent();
    $(trobj).remove();
}
