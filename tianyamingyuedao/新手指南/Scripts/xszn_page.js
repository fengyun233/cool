/**
 * Created by hp on 2018/8/9.
 */

//ʵ�����������ʾNBAͼƬ,����Ƴ�����NBAͼƬ
$(function () {
    $('.xn_lq').mouseenter(function () {
        $("#xn_nba").show().css('z-index','2');
    })
    $('.xn_lq').mouseleave(function () {
        $("#xn_nba").hide();
    })


    //�����ʾ������
    $('.xn_sidenav').children('li').click(function () {
        $(this).children('ul').show().parent('li').siblings('li').children('ul').hide();
    })
    
    //���������Ƶ
    $('.xn_direc').children('a').children('img').click(function () {
        $('.video1').show();
        $('.video2').show();
    })
    $('.xn_scdpart').children('a').click(function () {
        $('.video3').show();
        $('.video4').show();
    })
    //����ر�������Ƶ
    $('.video2').children('span').click(function () {
        $('.video1').hide();
        $('.video2').hide();
    })
    $('.video4').children('span').click(function () {
        $('.video3').hide();
        $('.video4').hide();
    })

})