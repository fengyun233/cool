$(function( ){
//  主体导航  切换模块事件  单击改变样式
    $('#manav>a').on('click',function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        var idx = $(this).index();
        $('#alllists_'+idx).show().siblings().hide();
    });         //点击事件括号





//  主体部分 移入模块显示绿色模块
    $('.ls').on('mouseenter', function () {
        $(this).children('.innerbox').children('.dh').stop(true, false).animate({
            top: 0
        }, 250, 'swing');
    });//移入事件函数括号
    $('.ls').on('mouseleave', function () {
        $(this).children('.innerbox').children('.dh').stop(true, false).animate({
            top: 278
        }, 0, 'swing');
    });//移出事件函数括号




//  移入显示NBD图片
//头部函数
    $('.xn_lq').mouseenter(function () {
        $("#xn_nba").show().css('z-index','2');
    })
    $('.xn_lq').mouseleave(function () {
        $("#xn_nba").hide();
    });



    //腾讯游戏排行榜鼠标移入
    $('.tengxun_game').on('mouseenter',function(){
        $(this).css('color','red');
        $('.bigbox').show();
    })
    $('.bigbox').on('mouseleave',function(){
        $('.tengxun_game').css('color','#464646');
        $('.bigbox').hide();
    })




    //腾讯游戏盒子中，获取当前的li标签添加鼠标移入事件
    $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
        $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
    });





  //第十二个二维码单击弹出对话框
   $('#dh_ewm').on('click',function(){
    alert('请用手机扫描二维码参加！');
   });  //单击二维码弹出对话框事件



});//入口函数括号

