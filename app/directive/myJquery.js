/**
 * Created by Administrator on 2016-04-22.
 *
 */
var jqToggle=function(){
    var isOne = true;
    if ($(".divOther").is(":hidden")) {
        $(".divOther").show();
        $(".btnOpen").html('隐藏');
        if (isOne) {
            $(".btnAddOtherCustomer").click();
            isOne = false;
        }
    }
    else {
        $(".divOther").hide();
        $(".btnOpen").html('展开');
    }
};

var jqAddCustomer=function(){
    if ($(".ruzhu tbody tr").length >= 4) {
        alert("同一个房间最多只能新增4个随客");
        return;
    }
    var trobj = $($("#divEditRow tbody").html());
    $(".ruzhu tbody").append(trobj);
};

function RowDelete(obj) {
    var trobj = $(obj).parent().parent();
    $(trobj).remove();
}