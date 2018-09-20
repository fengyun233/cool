$(function(){
    $('.nav a').on('mouseenter',function () {
        $(this).css({
            'color': '#ffb400',
            'border-bottom': '2px solid #ffb400'
        })
    });
    $('.nav a').on('mouseleave',function () {
        $(this).css({
            'color': '#fff',
            'border-bottom': ''
        })
    });
    var top1=$('.fixbox').height();
    var flag=true;
    $('a.close-fix').on('click',function(){
        $('#fixbox').css({
            position:'static',
            width: '1197px',
            height: '673px'
        });
        $('.mod').eq(0).css({
            marginTop:10+'px'
        });
        flag=false;
    });
    $(window).on('scroll',function(){
        var scrollTop1=$(window).scrollTop();
        if(flag){
            if(scrollTop1>(top1+673)){
                $('#fixbox').css({
                    position:'fixed',
                    bottom:'50px',
                    right:0,
                    width:'450px',
                    height:'250px',
                    zIndex:100
                });
                $('.close-fix').css('display','block');
                $('.mod').eq(0).css({
                    marginTop:-150+'px'
                });
            }else{
                $('#fixbox').css({
                    position:'static',
                    width: '1197px',
                    height: '673px'
                });
                $('.mod').css({
                    marginTop: '10px'
                });
            }
        }
        if(scrollTop1<(top1+673)){
            flag=true;
        }
    });
    $('.on').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx=$(this).index();
        $('.news-list>ul').eq(idx).css('display','block').siblings('ul').css('display','none');
    });
    $('.nav-list li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx=$(this).index();
        $('.v-list>ul').eq(idx).css('display','block').siblings('ul').css('display','none');
    });
    $('div.video-pic').on('mouseenter',function(){
        $(this).find('img').animate({
            'width':280,
            'height':200
        },200)
    });
    $('div.video-pic').on('mouseleave',function(){
        $(this).find('img').animate({
            'width':261,
            'height':171
        },200)
    });
    $('div.video-pic').on('click',function(){
        $('.mask').css('display','block');
        $('.shipin').css('display','block');
    });
    $('a.dia-close').on('click',function(){
        $('.mask').css('display','none');
        $('.shipin').css('display','none');
    });
    $('li.rank-item').on('mouseenter',function(){
        $(this).addClass('current').siblings('li').removeClass('current');
    });
    $('#rank_control3 li.rank-item').on('mouseenter',function(){
        $(this).addClass('current').siblings('li').removeClass('current').parent().parent().siblings('.col-body').find('li').removeClass('current')
    });
    $('div.two').on('mouseenter',function(){
        $(this).children('div.ost_pop').css({
            display:'block',
            position:'absolute',
            right:'800px',
            top:40
        });
    });
    $('div.two').on('mouseleave',function(){
        $(this).children('div.ost_pop').css('display','none');
    });
});