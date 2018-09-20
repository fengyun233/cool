$(function(){
    // 鼠标移入到打开网页时弹出的窗口的关闭按钮会变红
    $('.close').on('mouseenter',function(){
        $(this).css('background',"url('Images/guanbi(1).png')")
    })
    $('.close').on('mouseleave',function(){
        $(this).css('background',"url('Images/guanbi.png')")
    })
    // ，点击按钮会隐藏窗口
    $('.close').on('click',function(){
        $('.Secure-login').css('display','none');
        $('.bg').css('display','none')
    })



    //鼠标移入顶部导航栏的第二个logo，会弹出大图片，移出会消失，并使第一个logo层级提高
    $('.twologo').on('mouseenter',function(){
        $('.basc').css('display','block');
        $('.onelogo').css('z-index','2')
    })
    $('.basc').on('mouseleave',function(){
        $('.basc').css('display','none')
    });
    //鼠标移入到新手指南里面的那些a标签后，a标签左边的菱形会变，移出后会恢复原状
    $('.xinshou li').on('mouseenter',function(){
        $(this).children('i').css('backgroundPosition','0 -2309px')
    })
    $('.xinshou li').on('mouseleave',function(){
        $(this).children('i').css('backgroundPosition','0 -2340px')
    })



    // 点击角色查询部分的‘您好，请先登录’时，会弹出初始窗口

    $('#wrapper-login').on('click',function(){
        $('.Secure-login').children('input').val('');
        $('.Secure-login').css('display','block');
        $('.bg').css('display','block')
    })

    // 并改变自己为您好...,【注销】
    $('#two-login').click(function(){
        if($('.Secure-login').find('#one-login').val().length>5&&$('.Secure-login').find('#password').val().length>5){
            // 当账号为403691322密码为123456时才能做以下事件
            // 弹出的窗口会隐藏
            $('.Secure-login').css('display','none');
            // 背景也会隐藏
            $('.bg').css('display','none');
             // ‘您好(自己输入的ID)，注销’这几个字会显示
            $('.logined-bottom').css('display','block');
            // 获取自己设置的输入的ID
            $('.mainpart').find('.hive').html($('#one-login').val())
            // ‘您好，请先登录’这几个字也会隐藏’
            $('.logined').css('display','none');
            // 只有登录成功后输入验证码才会显示出下面隐藏的表格中的信息
            $('.checkarea').children('a').on('click',function(){
                if($('.checkarea').find('#inyzm').val()=='LRgm'){
                    $('table').find('tbody').show();
                }else {
                    alert('验证码错误')
                }
            })
            
        }else {
            $('.Secure-login').find('em').show();
            setTimeout(function (  ) {
                $('.Secure-login').find('em').hide();
            },3000);


            
        }
    })
    // 点击注销的时候，会变回原来的字‘您好，请先登录’。并且表格会隐藏
    $('#bottom-login').on('click',function(){
        $('.logined').css('display','block');
        $('.logined-bottom').css('display','none');
        $('table').find('tbody').hide();
    })
    
    // 点击账号栏按回车，和点击登录按钮效果一样
    $('#password').keyup(function (event) {
        //console.log(event.keyCode);
        if(event.keyCode == 13){
            /*触发点击事件  执行发射操作*/
            $('#two-login').click();
        }
    })
    
    // 点击密码栏按回车，和点击登录按钮效果一样
    $('#one-login').keyup(function (event) {
        //console.log(event.keyCode);
        if(event.keyCode == 13){
            /*触发点击事件  执行发射操作*/
            $('#two-login').click();
        }
    })

    $('#inyzm').keyup(function (event) {
        //console.log(event.keyCode);
        if(event.keyCode == 13){
            /*触发点击事件  执行发射操作*/
            $('#putzm').siblings().click();
        }
    })


    // 开始腾讯游戏排行榜部分
    //  移入显示NBD图片
//头部函数


//腾讯游戏排行榜鼠标移入
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




//腾讯游戏盒子中，获取当前的li标签添加鼠标移入事件
$('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
    $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
});

})
