/*
** Create by Administrator on 2018/8/11
*/
//入口函数
$(function (  ) {
    //鼠标点击左边大图和右边大图事件
    $('#zuobiansp').on('click',function (  ) {
        $('.logo-sp').hide()
        $('.logo-ts').hide()
        $('#zuobiansp').animate({width:1616},500,function (  ) {
            $('#zuobiansp').stop(true,false).fadeOut(500)
            $('#youbiansp').stop(true,false).fadeOut(500)
            $('#lefttp').stop(true,false).fadeIn(500)
            $('.nshlogo').css('left',-134)
        })
        $('.bg1').hide()
        $('.bg2').show()
    })
    $('#youbiansp').on('click',function (  ) {
        $('.logo-sp').hide()
        $('.logo-ts').hide()
        $('#zuobiansp').animate({width:0},500,function (  ) {
            $('#zuobiansp').stop(true,false).fadeOut(500)
            $('#youbiansp').stop(true,false).fadeOut(500)
            $('#righttp').stop(true,false).fadeIn(500)
            $('.nshlogo').css('left',1050)
        })
        $('.bg1').show()
        $('.bg2').hide()
    })

    //鼠标移入和移出视频和图赏logo
    $('.logo-sp').on('mouseenter',function (  ) {
        $('.logo-sp').stop(true,false).animate({left:344},200)
        $('.logo-sp i').stop(true,false).fadeIn()
    })
    $('.logo-sp').on('mouseleave',function (  ) {
        $('.logo-sp').stop(true,false).animate({left:359},200)
        $('.logo-sp i').stop(true,false).fadeOut()
    })
    $('.logo-ts').on('mouseenter',function (  ) {
        $('.logo-ts').stop(true,false).animate({left:555},200)
        $('.logo-ts i').stop(true,false).fadeIn()
    })
    $('.logo-ts').on('mouseleave',function (  ) {
        $('.logo-ts').stop(true,false).animate({left:540},200)
        $('.logo-ts i').stop(true,false).fadeOut()
    })

    //鼠标点击视频和图赏logo触发大图点击事件
    $('.logo-sp').on('click',function (  ) {
        $('#zuobiansp').trigger('click')
    })
    $('.logo-ts').on('click',function (  ) {
        $('#youbiansp').trigger('click')
    })
    //左边视频鉴赏里面游戏介绍//流派技能点击事件
    $('#lefttp .leftnav .yxjs').on('click',function (  ) {
        $('#lefttp  .a1').fadeIn(400)
        $('#lefttp  .a2').fadeOut(400)
        $('#lefttp .leftnav .yxjs').addClass('borderbottom').siblings('a').removeClass('borderbottom')
    })
    $('#lefttp .leftnav .lpjn').on('click',function (  ) {
        $('#lefttp  .a2').fadeIn(400)
        $('#lefttp  .a1').fadeOut(400)
        $('#lefttp .leftnav .lpjn').addClass('borderbottom').siblings('a').removeClass('borderbottom')
    })
    //右边视频鉴赏里面场景截图//流派壁纸//游戏特写点击事件
    $('#righttp .rightnav .cjjt').on('click',function (  ) {
        $('#righttp  .b1').fadeIn(400)
        $('#righttp  .b2').fadeOut(400)
        $('#righttp  .b3').fadeOut(400)
        $('#righttp .rightnav .cjjt').addClass('borderbottom').siblings('a').removeClass('borderbottom')
    })
    $('#righttp .rightnav .lpbz').on('click',function (  ) {
        $('#righttp  .b1').fadeOut(400)
        $('#righttp  .b2').fadeIn(400)
        $('#righttp  .b3').fadeOut(400)
        $('#righttp .rightnav .lpbz').addClass('borderbottom').siblings('a').removeClass('borderbottom')
    })
    $('#righttp .rightnav .yxtx').on('click',function (  ) {
        $('#righttp  .b1').fadeOut(400)
        $('#righttp  .b2').fadeOut(400)
        $('#righttp  .b3').fadeIn(400)
        $('#righttp .rightnav .yxtx').addClass('borderbottom').siblings('a').removeClass('borderbottom')
    })
    //图赏和视频图片点击事件
    $('#righttp .shipinlogo').on('click',function (  ) {
        $('#righttp').stop(true,false).fadeOut(600)
        $('.bg1').hide()
        $('.bg2').slideDown(600,function (  ) {
            $('#lefttp').stop(true,false).fadeIn(400)
            $('.nshlogo').css('left',-134)
        })
    })
    $('#lefttp .tushanglogo').on('click',function (  ) {
        //$('#righttp').stop(true,false).fadeIn(500)
        $('#lefttp').stop(true,false).fadeOut(600)
        $('.bg1').slideDown(600,function (  ) {
            $('#righttp').stop(true,false).fadeIn(400)
            $('.nshlogo').css('left',1050)
        })
        $('.bg2').hide()
    })

    //鼠标移入左边游戏介绍//流派技能里面的图片事件
    var timeID = null
    var that = null
    $('#lefttp .left-list a').on('mouseenter',function (  ) {
        that = this
        $(this).find('i').show()
        $(this).find('span').show()
        $(this).children('div').find('img').stop(true,false).animate({
            width:308,
            height:154,
            marginLeft:-4,
            marginTop:-2
        },200)
        var i = 0
        timeID=setInterval(function (  ) {
            i+=4
            $( this ).find ( "span" ).find('img')[0].style.transform='rotate('+i+'deg)'
        }.bind(that),20)
    })
    $('#lefttp .left-list a').on('mouseleave',function (  ) {
        $(this).find('i').hide()
        $(this).children('div').find('img').stop(true,false).animate({
            width:300,
            height:150,
            marginLeft:0,
            marginTop:0
        },200)
        clearInterval(timeID)
        $(this).find('span').hide()
        $( this ).find ( "span" ).find('img')[0].style.transform='rotate(0deg)'

    })

   $('.right-list li a div').html('<i class="a"></i>\n' + '    <i class="b"></i>\n' + '    <i class="c"></i>\n' + '    <i class="d"></i>')
    //鼠标移入右边场景截图//流派壁纸//游戏特写里面的图片事件
    $('#righttp .right-list a').on('mouseenter',function (  ) {
        $(this).children('i').show()
        $(this).find('img').stop(true,false).animate({
            width:308,
            height:154,
            marginLeft:-4,
            marginTop:-2
        },200)
        $('.a').css('width',0)
        $('.b').css('height',0)
        $('.c').css('width',0)
        $('.d').css('height',0)
        $(this).find('div').find('.a').stop(true,true).animate({width:280},100,function (  ) {
            $(this).siblings('.b').stop(true,true).animate({height:133},100,function (  ) {
                $(this).siblings('.c').stop(true,true).animate({width:280},100,function (  ) {
                    $(this).siblings('.d').stop(true,true).animate({height:135},100)
                })
            })
        })
        $(this).find('span').stop(true,false).show()
    })
    $('#righttp .right-list a').on('mouseleave',function (  ) {
        $(this).children('i').hide()
        $(this).find('img').stop(true,false).animate({
            width:300,
            height:150,
            marginLeft:0,
            marginTop:0
        },200)
        $(this).find('span').stop(true,false).hide()
        $(this).find('div').find('.a').stop(true,true).animate({width:0},400)
        $(this).find('div').find('.b').stop(true,true).animate({height :0},400)
        $(this).find('div').find('.c').stop(true,true).animate({width:0},400)
        $(this).find('div').find('.d').stop(true,true).animate({height:0},400)
        $('.a').css('width',0)
        $('.b').css('height',0)
        $('.c').css('width',0)
        $('.d').css('height',0)
    })

    //逆水寒大logo 里面的分享logo移入事件
    $('.nshlogo a').eq(2).on('mouseenter',function (  ) {
        $('.nshlogo a').eq(3).stop(true,false).slideDown()
    })
    $('.nshlogo span').on('mouseleave',function (  ) {
        $('.nshlogo a').eq(3).stop(true,false).slideUp()
    })

})


