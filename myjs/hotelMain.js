/**
 * Created by Administrator on 2015-11-17.
 * 主房态盘有关的js文件
 */
/*启动时加载*/
$(function () {
    setPop();
    lefbox();
    topbox();
    botbox();
    /*禁用右键菜单*/
    $('body').bind("contextmenu",function(){
        return false;
    })

});
/*左侧菜单导入*/
function lefbox(){
    $("#lefbox").load("public/left.html")

};


/*快捷菜单导入*/
function topbox(){
    $("#topbox").load("public/top.html")

};

/*单击开房弹窗导入*/
function jump(){
    $(top.document.body).append('<iframe src="reception/roomReservation.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
};

/*新增预订弹窗导入*/
function book() {
    $(top.document.body).append('<iframe src="bookManagement/bookPopup.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
};


/*明细打印列表导入*/
function printTable() {
    $(top.document.body).append('<iframe src="cashier/detailPrint.html" id="np-pop-iframe-print" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
};

/*esc退出弹窗*/
document.onkeyup = function (e)
{
    e = e || window.event;
    var code = e.which || e.keyCode;
    if (code == 27)
    {
        $("#np-pop-iframe-print",window.parent.document).remove();
        $("#np-pop-iframe",window.parent.document).remove();
    }
};

/*底部版权信息导入*/
function botbox(){
    $("#botbox").load("public/foot.html")

};

/*为每个房态调用右键弹出功能*/
function setPop() {
    var roomState = $(".mainRoomState");
    /*右键弹出功能*/
    roomState.contextPopup({
        items: [
            {
                label: '收取预付', icon: 'icon-download-alt', action: function () {
                $(top.document.body).append('<iframe src="cashier/chargeInAdvance.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
            }
            },
            {
                label: '杂单录入', icon: 'icon-edit', action: function () {
                $(top.document.body).append('<iframe src="cashier/miscellaneousSingle.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
            }
            },
            {
                label: '冲账管理', icon: 'icon-exchange huang', action: function () {
                $(top.document.body).append('<iframe src="cashier/strikeABalance.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
            }
            },
            {
                label: '房吧录入', icon: 'icon-home', action: function () {
                $(top.document.body).append('<iframe src="cashier/snacksEntry.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
            }
            },
            null, // divider
            {
                label: '离店结算', icon: 'icon-share huang', action: function () {
                $(top.document.body).append('<iframe src="cashier/leaveBalance.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
            }
            },
            {
                label: '消费明细', icon: 'icon-file-alt', action: function () {
                $(top.document.body).append('<iframe src="consumptionQuery/consumptionDetail.html" id="np-pop-iframe" allowtransparency="true" frameborder="0" scrolling="no"></iframe>');
            }
            },
            {
                label: '散客开房', icon: 'icon-key huang', action: function () {
                alert('clicked 7')
            }
            },
            {
                label: '宾客续住', icon: 'icon-screenshot', action: function () {
                alert('clicked 8')
            }
            },
            null, // divider
            {
                label: '散客预订', icon: 'icon-lock huang', action: function () {
                alert('clicked 9')
            }
            },
            {
                label: '联房管理', icon: 'icon-sitemap', action: function () {
                alert('clicked 10')
            }
            }
        ]

    });
};





$(".dropdown-menu li").click(function (e) {
    e.preventDefault();
    var _this = $(this);
    if (_this.attr("state")!=null){
        $(".roomState").remove();
        $.ajax('resetStateByState.html', {
            data: {
                state: $(this).attr("state")
            },
            success: function (data) {
                refresh(data);
            }
        })
    }
});