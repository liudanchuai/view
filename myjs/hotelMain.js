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
/*为每个房态调用右键弹出功能*/
function setPop() {
    var roomState = $(".roomState");
    /*右键弹出功能*/
    roomState.contextPopup({
        items: [
            {
                label: '散客开房', icon: 'icon-key huang', action: function () {
                alert('clicked 1')
            }
            },
            {
                label: '收取预付', icon: 'icon-download-alt', action: function () {
                alert('clicked 2')
            }
            },
            {
                label: '房吧录入', icon: 'icon-home', action: function () {
                alert('clicked 3')
            }
            },

            {
                label: '杂单录入', icon: 'icon-edit', action: function () {
                alert('clicked 4')
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
                label: '宾客续住', icon: 'icon-screenshot', action: function () {
                alert('clicked 7')
            }
            },
            {
                label: '散客预订', icon: 'icon-lock huang', action: function () {
                alert('clicked 8')
            }
            },
            null, // divider
            {
                label: '冲账管理', icon: 'icon-exchange huang', action: function () {
                alert('clicked 9')
            }
            },
            {
                label: '联房管理', icon: 'icon-sitemap', action: function () {
                alert('clicked 9')
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
})