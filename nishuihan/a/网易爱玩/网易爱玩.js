/**
 * Created by LGP on 2018/8/12.
 */
//ͷ��ͼƬ�����ֲ� �������Ŵ� ����Ƴ��ָ� ����л�
$(function(){
    //�������Ŵ�
    $('#xiyou,#lieren').on('mouseenter',function(e){
        $('.header-left img').stop().animate({
            height: 600,
            width: 1060,
            left: -50,
            top: -50
        },400);
    });
    //����Ƴ���С
    $('#xiyou,#lieren').on('mouseleave',function(e){
        $('.header-left img').stop().animate({
            height: 500,
            width: 960,
            left: 0,
            top: 0
        },400);
        e.stopPropagation();
    });
    //����л� �л�ͼƬ��ͬʱ�л������ť����ɫ
     $('.tow').on('click',function(e){
         $('.lieren').show();
         $('.dahua').hide();
         $('.tow').css({backgroundColor: 'yellow'});
         $('.one').css({backgroundColor: '#ccc'})
     });
    $('.one').on('click',function(e){
        $('.dahua').show();
        $('.lieren').hide();
        $('.one').css({backgroundColor: 'yellow'});
        $('.tow').css({backgroundColor: '#ccc'})
    })

    //ͷ�����½�ͼ
    //�������Ŵ�
    $('.attention a').on('mouseenter',function(){
        $(this).find('img').stop().animate({
            height: 375 ,
            width:300
        },200);
    });
    //����Ƴ���С
    $('.attention a').on('mouseleave',function(){
        $(this).find('img').stop().animate({
            height: 335,
            width: 260
        },200);
    });

    //�������img �ı� �����������Ǹ���Ӧli��ǩ��conmen
   //爱玩评测 手风琴
    var $lis = $('.youxi li');
    $lis.on('mouseenter',function(){
    $(this).addClass('lione').siblings('li').removeClass('lione');
    $(this).stop(true,false).animate({width:562},300).siblings('li').stop(true,false).animate({width:222},300);

    });
    //$lis.on('mouseenter',function(){
    //    $(this).addClass('lione').siblings('li').removeClass('lione');
    //});

    //游戏推荐
    //var $liList = $('.recommend-right li');
    //
    //$liList.on('mouseenter',function(){
    //
    //    $(this).stop(true,false).animate({height:132},500).siblings('li').stop(true,false).animate({height:66},500);
    //
    //});

    $('.recommend-right li').on('mouseenter',function(){
        $(this).addClass('exchange').siblings('li').removeClass('exchange');
        $(this).stop().animate({height:132},300).siblings('li').stop().animate({height:66},300);
    })


});