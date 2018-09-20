$(function () {
    //点击播放视频
    $('.xn_video').click(function () {
        $('.video1').show();
        $('.video2').show();
    })

//点击关闭隐藏视频
    $('.video2').children('span').click(function () {
        $('.video1').hide();
        $('.video2').hide();
    })

//点击切换页面
    $('.xn_show li').on("click", function () {
        var idx = $(this).index();
        $('.xn_main .xn_change li').stop(true, false).eq(idx).fadeIn(3000).siblings('li').fadeOut(1000);
    })


    // 鼠标移入列表
    $('.menu4 ul').children('li').eq(0).siblings().on('mouseenter', function () {
        $(this).css('border-bottom', '0 none').siblings('li').css('border-bottom', '1px solid #2d2d2d');
        $('.menu4 ul').children('li')[0].style.backgroundPosition = '0 0';
        $('.menu4 ul').children('li')[0].style.backgroundRepeat = 'no-repeat';
    })

    $('.menu4 ul').children('li').eq(0).on('mouseenter', function () {
        $(this).removeAttr('style');
    })

    //$('.menu4 ul').children('li').eq(0).siblings('li').on('click', function () {
    //    $('.menu4 ul').children('li')[0].style.backgroundPosition='0 0';
    //    //$('.menu4 ul').children('li').eq(0).css('backgroundPosition','0 0');
    //    //$('.menu4 ul').children('li')[0].style.backgroundRepeat='no-repeat';
    //});

    //鼠标点击列表


    $('.menu4 ul').children('li').eq(0).on('click', function () {
        $(this).css('backgroundPosition', '0 -92px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(1).on('click', function () {
        $(this).css('backgroundPosition', '-180px -92px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(2).on('click', function () {
        $(this).css('backgroundPosition', '-360px -92px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(3).on('click', function () {
        $(this).css('backgroundPosition', '-360px -140px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(4).on('click', function () {
        $(this).css('backgroundPosition', '0 -189px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(5).on('click', function () {
        $(this).css('backgroundPosition', '0 -140px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(6).on('click', function () {
        $(this).css('backgroundPosition', '-360px -188px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(7).on('click', function () {
        $(this).css('backgroundPosition', '-540px -46px').siblings('li').removeAttr('style');
    })
    $('.menu4 ul').children('li').eq(8).on('click', function () {
        $(this).css('backgroundPosition', '-540px -140px').siblings('li').removeAttr('style');
    })

    //$('.xwp_2s .xn_video').css('backgroundImage',"Images/smv-gb.jpg");


})
