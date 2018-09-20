//dzx  头部部分的js文件的开始
$(function () {
    //控制页面跳转点击事件
    var $ulList1 = $("#dzx-Tcenter #classList li")
    $ulList1.on("click", function () {
        var idx = $(this).index();
        var $conList1 = $("#dzx-Tbottom #bot-left div");
        $conList1.eq(idx).show().siblings("div").hide();
    });

    //ABIUT鼠标移入时的淡入事件
    var $about1 = $($("#dzx-Tcenter #classList li:eq(1)"))
    $about1.on("mouseenter", function () {
        $("#select #select-zero li:eq(0)").stop(true,false).fadeIn(1200);
        $("#select #select-zero li:eq(1)").stop(true,false).fadeIn(1200);
    })

    $about1.on("mouseleave", function () {
        $("#select #select-zero li").stop(true,false).fadeOut(600);
    })

    $("#select #select-zero li:eq(1)").on("mouseenter", function () {
        $("#select #select-zero li:eq(2)").stop(true,false).fadeIn(600);
        $("#select #select-zero li:eq(3)").stop(true,false).fadeIn(600);
        $("#select #select-zero li:eq(4)").stop(true,false).fadeIn(600);
    })

    $("#select #select-zero li:eq(1)").on("mouseleave", function () {
        $("#select #select-zero li:eq(2)").stop(true,false).fadeOut(600);
        $("#select #select-zero li:eq(3)").stop(true,false).fadeOut(600);
        $("#select #select-zero li:eq(4)").stop(true,false).fadeOut(600);
    })
})
