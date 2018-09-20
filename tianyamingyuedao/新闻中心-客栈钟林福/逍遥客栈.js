/*
** Create by 12625 on 2018/8/12
*/
$(function (  ) {
    $(".head .nba").on("mouseenter",function (  ) {
        $(this).parent().next().show();
    })
    $(".head .big").on("mouseleave",function (  ) {
        $(this).hide();
    })
    $(".nav .list1 li").on("mouseenter",function (  ) {
        $(this).css("backgroundColor","#d3ede7")

    })
    $(".nav .list1 li").on("mouseleave",function (  ) {
        $(this).css("backgroundColor","")

    })
    $(".nav .list2 a").on("mouseenter",function (  ) {
        $(this).css("background",'url("./imgs客栈/img_9.jpg")')
        $(this).css("lineHeight","116PX")

    })
    $(".nav .list2 a").on("mouseleave",function (  ) {
        $(this).css("background","")
        $(this).css("lineHeight","166PX")
    })
    $(".hd li").on("mouseenter",function (  ) {
        $(this).addClass("on");
         $(this).siblings().removeClass("on");
        var idx=$(this).index();
        $(".bd>div").eq(idx).show().siblings("div").hide()

    })
    // $(".hd li").on("mouseleave",function (  ) {
    //         $(this).removeClass("on")
    //
    // })
    $(".toptitle .on").on("mouseenter",function (  ) {
        var tex=$(this).text();
        $(this).text($(this).siblings("em").text());
        $(this).siblings("em").text(tex);
        if($(this).text()=="最新资讯") {
            $(".pm .conlist ul:eq(1)").show();
            $(".pm .conlist ul:eq(0)").hide();
        }else {
            $(".pm .conlist ul:eq(0)").show();
            $(".pm .conlist ul:eq(1)").hide();
        }
    })
    $(".acc").on("mouseenter",function (  ) {
        $(this).stop().animate({width:428});
        $(this).siblings().stop().animate({width:58});
        $(this).children(".acc_panel").children("a").hide();
        $(this).siblings().children(".acc_panel").children("a").show();
        // $(this).siblings().children(".acc_panel").children("a").show();
        // if($(this).width()<59) {
        //     $(this).children(".acc_panel").children("a").show();
        //     $(this).siblings().children(".acc_panel").children("a").hide();
        //
        // }

    })
    // for (var i=0;i<$(".acc").length;i++){
    //     if($($(".acc")[i]).css("width")==428) {
    //         $($(".acc")[i]).css("background","")
    //     }
    // }
    //获取当前的li标签添加鼠标移入事件
    console.log($('.bigbox .ost_rank li.rank-item'));//col_body中的li标签
    $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
        console.log($(this).children('div.rank-name-game'));//'div.rank-name-game'
        $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
        console.log($(this).children('div.rank-name-game').show().parent());
    })

    //腾讯游戏排行榜鼠标移入
    $('.game').on('mouseenter',function(){
        $('.bigbox').show();
    })
    $('.game').on('mouseleave',function(){
        $('.bigbox').hide();
    })
    $('.bigbox').on('mouseenter',function(){
        $('.bigbox').show();
    })
    $('.bigbox').on('mouseleave',function(){
        $('.bigbox').hide();
    })

})