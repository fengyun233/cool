$(function(){
   

    //鼠标移入顶部导航栏的第二个logo，会弹出大图片，移出会消失，并使第一个logo层级提高
    $('.twologo').on('mouseenter',function(){
        $('.basc').css('display','block');
        $('.onelogo').css('z-index','2')
    })
    $('.basc').on('mouseleave',function(){
        $('.basc').css('display','none')
    });



    //鼠标移入到新手指南里面的那些a标签后，a标签左边的菱形会变，移出后会恢复原状
    $('.xinshou li').on('mouseenter',function(){
        $(this).children('i').css('backgroundPosition','0 -2309px')
    })
    $('.xinshou li').on('mouseleave',function(){
        $(this).children('i').css('backgroundPosition','0 -2340px')
    })



    // 开始腾讯游戏排行榜部分
    //  移入显示NBD图片
//头部函数


//腾讯游戏排行榜鼠标移入
$('.topnav').find('.right').on('mouseenter',function(){
    $('.bigbox').show();
})
//腾讯游戏排行榜鼠标移出
$('.topnav').find('.right').on('mouseleave',function(){
    $('.bigbox').hide();
})
// 鼠标移出
$('.ost_rank').on('mouseleave',function(){
    $('.bigbox').hide();
})
$('.ost_rank').on('mouseenter',function(){
    $('.bigbox').show();
})




//腾讯游戏盒子中，获取当前的li标签添加鼠标移入事件
$('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
    $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
});

})
