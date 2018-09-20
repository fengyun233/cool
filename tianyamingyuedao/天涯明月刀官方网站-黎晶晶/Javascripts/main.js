$(function () {

    $('.bigbox .ost_rank li.rank-item').on('mouseenter', function () {
        $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
    });


//    中间轮播图


    //lunBo();
    $('#indrt span').on('mouseenter', function () {
        //clearInterval(timeID);
        var index = $(this).index();
        //console.log(index);
        $(this).addClass('cur').siblings('span').removeClass('cur');
        $('#rotate li').eq(index).addClass('cur').siblings('li').removeClass('cur');
        $('#rotate').stop(true, false).animate({
            left: -$(this).index() * 799
        }, 200);

    });

    var timeID;

    //$('.hotrotate').on('mouseleave', function () {
    //    lunBo();
    //});
    //function lunBo() {
    //    var i = 0;
    //    timeID = setInterval(function () {
    //
    //        if (i == $('#rotate li').length - 1) {
    //            i = 0;
    //        }
    //
    //        $('#indrt span').eq(i).addClass('cur').siblings('span').removeClass('cur');
    //        $('#rotate li').eq(i).addClass('cur').siblings('li').removeClass('cur');
    //
    //        $('#rotate').stop(true, false).animate({
    //            left: -i * 799
    //        }, 500);
    //        i++;
    //
    //    }, 2000);
    //
    //}

    //新闻
    //游戏新闻点击事件
    $('#newstab>ul.tabs>li').on('click', function () {
        $(this).addClass('cur').siblings('span').removeClass('cur');
        $('.newsbox .bdbotline').css('left', $('#newstab>ul.tabs>li').width() * $(this).index());
        //console.log($(this).index());
        $('#newslist>ul').eq($(this).index()).show().siblings('ul').hide();
    });
    //媒体点击事件

    $('#widetab>ul.tabs>li').on('click', function () {
        $(this).addClass('cur').siblings('span').removeClass('cur');
        $('#widetab .bdbotline').css('left', $('#widetab>ul.tabs>li').width() * $(this).index());
        //console.log($(this).index());
        $('#widelist>ul').eq($(this).index()).show().siblings('ul').hide();
    });
    //攻略点击事件

    $('#tegytab>ul.tabs>li').on('click', function () {
        $(this).addClass('cur').siblings('span').removeClass('cur');
        $('#tegytab .bdbotline').css('left', $('#tegytab>ul.tabs>li').width() * $(this).index());
        //console.log($(this).index());
        $('#tegylist>ul').eq($(this).index()).show().siblings('ul').hide();
    });


//    同人推荐

    $('.qztt').on('mouseenter', function () {
        $(this).parent('dl').stop(true,false).animate({
            width:460

        },200).siblings('dl').stop(true,false).animate({
                width:68

            },200);

        $(this).parent('dl').parent('.sfqBox').stop(true,false).animate({
            left:0

        },200);
        $(this).parent('dl').find('dt').addClass('curtt').parent('dl').siblings('dl').find('dt').removeClass('curtt');
        $(this).parent('dl').find('dd').addClass('curdd').parent('dl').parent('div').find('dt').removeClass('curdd');
        //console.log($(this).parent('dl').find('dt').addClass('curtt'));
    });

    $('.sfqBox').on('mouseleave', function () {

        $(this).find('dt').removeClass('curtt');
        $(this).find('dd').removeClass('curdd');
        $(this).stop(true,false).animate({
            left:391

        },200);
        $(this).children('dl').stop(true,false).animate({
            width:68

        },200);

    });




    //gamedata部分点击事件
    $('#datatab>ul.tabs>li').on('click', function () {
        $(this).addClass('cur').siblings('li').removeClass('cur');

        var idx = $(this).index();
        $('#mps>div').eq(idx * 2).stop(true, false).animate({
            right: 0

        }, 200).siblings('.mp-role').stop(true, false).animate({
            right: -165
        }, 200);
        $('#mps>div').eq((idx * 2) + 1).stop(true, false).animate({
            left: 0
        }, 200).siblings('.mp-intro').stop(true, false).animate({
            left: -170
        }, 200);
        //console.log($('#mps>div').eq(idx*2));
        //console.log($('#mps>div').eq((idx * 2) + 1));
    });


});