/**
 * Created by hp on 2018/8/9.
 */

//实现鼠标移入显示NBA图片,鼠标移出隐藏NBA图片
$(function () {
    $('.xn_lq').mouseenter(function () {
        $("#xn_nba").show().css('z-index','2');
    })
    $('.xn_lq').mouseleave(function () {
        $("#xn_nba").hide();
    })


    //点击显示下拉框
    $('.xn_sidenav').children('li').click(function () {
        $(this).children('ul').show().parent('li').siblings('li').children('ul').hide();
    })
    
    //点击播放视频
    $('.xn_direc').children('a').children('img').click(function () {
        $('.video1').show();
        $('.video2').show();
    })
    $('.xn_scdpart').children('a').click(function () {
        $('.video3').show();
        $('.video4').show();
    })
    //点击关闭隐藏视频
    $('.video2').children('span').click(function () {
        $('.video1').hide();
        $('.video2').hide();
    })
    $('.video4').children('span').click(function () {
        $('.video3').hide();
        $('.video4').hide();
    })

})