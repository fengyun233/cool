/*
** Create by 98087 on 2018/8/12
*/
$(function (  ) {
    $('')
    // 鼠标移入.left .right , 显示
    $('.top-bg .left').hover(function (  ) {
        $('.top-bg .left .left-more').stop().animate({width:240},500);
    },function (  ) {
        $('.top-bg .left .left-more').stop().animate({width:0},500);
    })
    $('.top-bg .right').hover(function (  ) {
        $('.top-bg .right .right-more').stop().animate({width:240},500);
    },function (  ) {
        $('.top-bg .right .right-more').stop().animate({width:0},500);
    })

    //5张图 , index下标 , 记录点击次数num
    var num = 0;
    $('.top-bg .circle a').on('click',function (  ) {
        num = $(this).index();
        $('.top-bg .circle a').eq(num).attr('id','circle-current').siblings().removeAttr('id');
        $('.topBg li').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })
    //右移动
    function move (  ) {
        if(num == $('.topBg li').length-1) {
            num = -1;
        }
        num++;
        $('.top-bg .circle a').eq(num).attr('id','circle-current').siblings().removeAttr('id');
        $('.topBg li').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
    }
    $('.top-bg .right').on('click',function (  ) {
      move();
    })
    //左移动
    $('.top-bg .left').on('click',function (  ) {
        if(num == 0) {
            num = $('.topBg li').length;
        }
        num--;
        $('.top-bg .circle a').eq(num).attr('id','circle-current').siblings().removeAttr('id');
        $('.topBg li').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })
    //自动轮播
    var timeID = null;
    function autoMove (  ) {
        clearInterval(timeID);
        timeID = setInterval(function (  ) {
            move();
        },5000);
    }
    autoMove();

})
$(function (  ) {
    //点击left列表 , 右侧图片变化
    $('.box-left .list a').on('click',function (  ) {
        var num = $(this).index();
        $('.content-box .box-left .pic a').eq(num).stop().show().siblings().stop().hide();
    })
})

$(function (  ) {
    var arr = [ { left : 0, top : 0 }, { left : 320, top : 0 }, { left : 640, top : 0 }, {
        left : 960,
        top : 0
    }, { left : 0, top : 340 }, { left : 320, top : 340 }, { left : 640, top : 340 }, { left : 960, top : 340 } ]
    //向上卷出去750px时, 展开列表
    $(window).on('scroll',function (  ) {
        var sTop = $(window).scrollTop();
        if(sTop>650) {
            $('.main .hot-box li').animate({display:'block'});
            change();
        }
    })
    function change (  ) {
        $.each ( arr, function ( index, ele ) {
            $ ( '.main .hot-box li' ).eq(index).stop ().animate ( ele, 500 );
        } )
    }
    $('.main .hot-list #change').on('click',function (  ) {

    })
})
$(function (  ) {
    $('.top-bg ul.topBg li').eq(0).find('*').css({color:'#fff'});
    $('.top-bg ul.topBg li').eq(3).find('*').css({color:'#fff'});
    $('.top-bg ul.topBg li').eq(0).find('div').css({'left':220});
    $('.top-bg ul.topBg li').eq(2).find('div').css('left',250);
})


