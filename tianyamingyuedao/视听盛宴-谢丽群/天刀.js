// 头部


$(function name(params) {
    // 头部
$('.twologo').on('mouseenter',function(){
        $('.basc').css('display','block');
        $('.onelogo').css('z-index','2')
    })
    $('.basc').on('mouseleave',function(){
        $('.basc').css('display','none')
    });
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
    
    
     //获取当前的li标签添加鼠标移入事件
  console.log($('.bigbox .ost_rank li.rank-item'));//col_body中的li标签
  $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
    console.log($(this).children('div.rank-name-game'));//'div.rank-name-game'
    $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
    console.log($(this).children('div.rank-name-game').show().parent());
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
// 视频

    $('.nva>li').on('click',function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        var idx = $(this).index();
        $('.big .one').eq(idx).addClass('see').siblings('.one').removeClass('see');
       
});

$('.hot .hota').on('mouseenter',function () {
    $(this).children('i.hotd').show().parent().siblings().children('i.hotd').hide();
    $(this).children('p.hotc').css({'background-color':'#2fc3a2'}).parent().siblings().children('p.hotc').css({'background-color': '#000','opacity':'0.8'})
    $(this).children('p.hotc').addClass('in').parent().siblings().children('p.hotc').removeClass('in');
});
$('.hot .hota').on('mouseleave',function () {
    $(this).children('i.hotd').hide().parent().siblings().children('i.hotd').hide();
    $(this).children('p.hotc').css({'background-color':'#000','opacity':'0.8'}).parent().siblings().children('p.hotc').css({'background-color': '#000','opacity':'0.8'})
    $(this).children('p.hotc').removeClass('in').parent().siblings().children('p.hotc').removeClass('in');
});
$('.load .hota').on('mouseenter',function(){
    $(this).children('i.hotd').show().parent().siblings().children('i.hotd').hide();
    $(this).children('p.hotc').css({'background-color':'#2fc3a2'}).parent().siblings().children('p.hotc').css({'background-color': '#000','opacity':'0.8'})
});
$('.load .hota').on('mouseleave',function(){
    $(this).children('i.hotd').hide().parent().siblings().children('i.hotd').hide();
    $(this).children('p.hotc').css({'background-color':'#000'}).parent().siblings().children('p.hotc').css({'background-color': '#000','opacity':'0.8'})
});
$('.load li.hota').on('click',function () {

    $('.vid').show();
});
$('.hot li.hota').on('click',function () {
    $('.vid').show();
})
$('.vid i').on('click',function () {
    $('.vid').hide();
});
// 原画
//鼠标移入移出
$('.koad .hota').on('mouseenter',function () {
    $(this).css('opacity','1').siblings('li').css('opacity','0.8');
    $(this).children('div').children('p').stop(true,false).slideDown(500);
});
$('.koad .hota').on('mouseleave',function () {
    
    $(this).children('div').children('p').stop(true,false).slideUp(500);
});
$('.koad').mouseleave(function () {
    $(this).find('li').css('opacity','1');

  });
  //鼠标点击
  $('.koad .hota').on('click',function () {
    //   var idx=$(this).src();
    console.log($('.vida').children('img'));
      $('.vida').children('img')[0].src = $(this).find('img')[0].src;
      $('.vida').show();
  })
  $('.vida i').on('click',function () {
      $('.vida').hide();
  });
//壁纸
//鼠标移入移出
$('.hoad .hota').on('mouseenter',function () {
    $(this).css('opacity','1').siblings('li').css('opacity','0.8');
    $(this).children('p').stop(true,false).slideDown(500);
});
$('.hoad .hota').on('mouseleave',function () {
    
    $(this).children('p').stop(true,false).slideUp(500);
});
$('.hoad').mouseleave(function () {
    $(this).find('li').css('opacity','1');

  });
//鼠标点击
$('.hoad .hota').on('click',function () {
    //   var idx=$(this).src();
    console.log($('.vida').children('img'));
      $('.vidb').children('img')[0].src = $(this).find('img')[0].src;
      $('.vidb').show();
  })
  $('.vidb i').on('click',function () {
      $('.vidb').hide();
  });
//音乐
  $('.goad li.hota').on('mouseenter',function(){
    $(this).children('i.hotd').show().parent().siblings().children('i.hotd').hide();
    $(this).children('b').show().parent().siblings().children('b').hide();
    $(this).css({'background-color':'#2fc3a2'}).siblings().css({'background-color': '#000','opacity':'0.8'})
});
$('.goad li.hota').on('mouseleave',function(){
    $(this).children('i.hotd').hide().parent().siblings().children('i.hotd').hide();
    $(this).children('b').hide().parent().siblings().children('b').hide();
    $(this).css({'background-color':'#2fc3a2'}).siblings().css({'background-color': '#000','opacity':'0.8'})
});


   


















});
