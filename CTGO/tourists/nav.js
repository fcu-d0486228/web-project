$(document).ready(function () {
    $("#goToTop").hide()//隐藏go to top按钮
    $(function () {
        var nav = $("#nav-header");
        var win = $(window);
        var sc = $(document);
        win.scroll(function () {
            if (sc.scrollTop() > 1) {//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                $("#goToTop").fadeIn();
            } else {
                $("#goToTop").fadeOut();
            }
            /*    if (sc.scrollTop() >= 110) {//判斷導航跟隨 110可自行更改
                    nav.addClass("fixednav");
                    $(".navTmp").fadeIn();
                } else {
                    nav.removeClass("fixednav");
                    $(".navTmp").fadeOut();
                }*/
        });
    });
    // 给go to top按钮一个点击事件
    $("#goToTop a").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
        return false;
    });
});