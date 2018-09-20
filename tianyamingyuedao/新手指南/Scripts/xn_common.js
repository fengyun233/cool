/**
 * Created by hp on 2018/8/10.
 */

//ʵ�����������ʾNBAͼƬ,����Ƴ�����NBAͼƬ
$(function () {
    $('.xn_lq').mouseenter(function () {
        $("#xn_nba").show().css('z-index', '2');
    })
    $('.xn_lq').mouseleave(function () {
        $("#xn_nba").hide();
    })
    //�����ʾ������
    $('.xn_sidenav').children('li').click(function () {
        $(this).children('ul').show().parent('li').siblings('li').children('ul').hide();
    })


    //腾讯游戏排行榜鼠标移入
$('.xn_list').on('mouseenter',function(){
    $('.bigbox').show();
})
$('.xn_list').on('mouseleave',function(){
    $('.bigbox').hide();
})
$('.bigbox').on('mouseenter',function(){
    $('.bigbox').show();
})
$('.bigbox').on('mouseleave',function(){
    $('.bigbox').hide();
})

   //获取当前的li标签添加鼠标移入事件
   console.log($('.bigbox .ost_rank li.rank-item'));//col_body中的li标签
   $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
     console.log($(this).children('div.rank-name-game'));//'div.rank-name-game'
     $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
     console.log($(this).children('div.rank-name-game').show().parent());
   })
})

