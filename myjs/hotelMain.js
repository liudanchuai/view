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
    $("#lefbox").load("public/left.html", function () {
        $("#lefbox").fadeIn(100);
    });

};


/*快捷菜单导入*/
function topbox(){
    $("#topbox").load("public/top.html", function () {
        $("#topbox").fadeIn(100);
    });

};

/*单击开房弹窗导入*/
function jump() {
    $("#mainBody").load("reception/roomReservation.html", function () {
        $("#mainBody").fadeIn(100);
    });

};

/*单击开房弹窗删除*/
function none() {
    $('#mainBody').empty();
};


/*明细打印列表导入*/
function print() {
    $("#print").load("cashier/detailPrint.html", function () {
        $("#print").fadeIn(100);
    });
};

/*明细打印列表删除*/
function printEmpty() {
    $('#print').empty();
};

document.onkeyup = function (e)
{
    e = e || window.event;
    var code = e.which || e.keyCode;
    if (code == 27)
    {
        if($("#mainBody").html!==''){
            none() ;
        };
        if($("#print").html!==''){
            printEmpty() ;
        };
    }
};

/*底部版权信息导入*/
function botbox(){
    $("#botbox").load("public/foot.html", function () {
        $("#botbox").fadeIn(100);
    });

};

/*为每个房态调用右键弹出功能*/
function setPop() {
    var roomState = $(".mainRoomState");
    /*右键弹出功能*/
    roomState.contextPopup({
        items: [
            {
                label: '收取预付', icon: 'icon-download-alt', action: function () {
                $("#mainBody").load("cashier/chargeInAdvance.html", function () {
                    $("#mainBody").fadeIn(100);
                });
            }
            },
            {
                label: '杂单录入', icon: 'icon-edit', action: function () {
                $("#mainBody").load("cashier/miscellaneousSingle.html", function () {
                    $("#mainBody").fadeIn(100);
                });
            }
            },
            {
                label: '冲账管理', icon: 'icon-exchange huang', action: function () {
                $("#mainBody").load("cashier/strikeABalance.html", function () {
                    $("#mainBody").fadeIn(100);
                });
            }
            },
            {
                label: '房吧录入', icon: 'icon-home', action: function () {
                $("#mainBody").load("cashier/snacksEntry.html", function () {
                    $("#mainBody").fadeIn(100);
                });
            }
            },
            null, // divider
            {
                label: '离店结算', icon: 'icon-share huang', action: function () {
                alert('clicked 5')
            }
            },
            {
                label: '消费明细', icon: 'icon-file-alt', action: function () {
                alert('clicked 6')
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