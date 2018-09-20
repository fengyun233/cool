/**
 * Created by hp on 2018/8/12.
 */


$(function () {

    /*******************************/


    $(function(){

        $('.xn_lq').mouseenter(function () {
            $("#xn_nba").show().css('z-index','2');
        })
        $('.xn_lq').mouseleave(function () {
            $("#xn_nba").hide();
        })
        //腾讯游戏排行榜鼠标移入
        $('.tengxun_game').on('mouseenter',function(){
            $('.bigbox').show();
        })
        $('.bigbox').on('mouseleave',function(){
            $('.bigbox').hide();
        })

        $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
            $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
        })

    });


    /*****************************/




    //摆动
    $('.xn_gzyList li').on('mouseenter', function () {
        $(this).css('animation', ' go 1.5s').siblings('li').removeAttr('style');
    })


    $('.xn_mkfor').on('click', function () {
        $(this).animate({
            left: 350,
            top: 210,
        }, 150, function () {
            //transform:'matrix(0.7,0,0,0.7,0,0)',
            ////缩放scale(x,y)也可以写成`matrix(x,0,0,y,0,0)
            $(this).siblings('div').css('transform', ' matrix(0.7,0,0,0.7,0,0)')
            $(this).css('opacity', '1').siblings('div').css('opacity', '0.3');

            $('.xn_no01').fadeIn(100);
            $('.xn_no02').fadeIn(100);
            $('.xn_no03').fadeIn(100);
            $('.xn_line').animate({
                width: 420
            }, 1500, function () {
                $('.xn_ulmo li').eq(0).fadeIn(1500);
                $('.xn_ulse li').eq(0).fadeIn(2500);
                $('.xn_no04').fadeIn(100);
                $('.xn_find').fadeIn(3500);
            })
            $('.xn_line').show();
        })

        $('.xn_close').on('click', function () {
            $('.xn_find').fadeOut(500);
            $('.xn_no04').fadeOut(3000);
            $('.xn_no01').fadeOut(3000);
            $('.xn_no02').fadeOut(3000);
            $('.xn_no03').fadeOut(3000);
            $('.xn_ulmo li').eq(0).fadeOut(1500);
            $('.xn_ulse li').eq(0).fadeOut(2000);
            $('.xn_line').animate({
                width: 0
            }, 600, function () {
                $('.xn_mkfor').animate({
                    left: 500,
                    top: 200
                },350, function () {
                    $('.xn_mask').children('div').children('div').css('transform', ' matrix(1,0,0,1,0,0)');
                    $('.xn_mask').children('div').children('div').css('opacity', '1');
                })

            })




        })

    })


    //点击交换

    $('.xn_mkfor').siblings('div').on('click', function () {
        //给鼠标移动事件解绑
        //$('.xn_mask').removeEventListener('mousemove',move,false);
        //$('.xn_mask').css({
        //    top: 0,
        //    left: 0
        //})

        var idx = $(this).index();
        console.log(idx);

        //存储当前位置
        var curleft = parseInt($(this).css('left'));
        var curtop = parseInt($(this).css('top'));
        //console.log(curleft);
        //console.log(curtop);

        var getLeft = parseInt($(this).css('left'));
        var getTop = parseInt($(this).css('top'));
        $(this).animate({
            left: 350,
            top: 210,
        }, 150, function () {
            //transform:'matrix(0.7,0,0,0.7,0,0)',
            ////缩放scale(x,y)也可以写成`matrix(x,0,0,y,0,0)
            $(this).siblings('div').css('transform', ' matrix(0.7,0,0,0.7,0,0)')
            $(this).css('opacity', '1').siblings('div').css('opacity', '0.3');

            $('.xn_no01').fadeIn(100);
            $('.xn_no02').fadeIn(100);
            $('.xn_no03').fadeIn(100);
            $('.xn_line').animate({
                width: 420
            }, 1500, function () {
                $('.xn_ulmo li').eq(idx).fadeIn(1500);
                $('.xn_ulse li').eq(idx).fadeIn(2500);
                $('.xn_no04').fadeIn(100);
                $('.xn_find').fadeIn(3500);
            })
            $('.xn_line').show();


        });
        $('.xn_mkfor').animate({
            left: getLeft,
            top: getTop,
        }, 150)

        //点击关闭

        $('.xn_close').on('click', function () {
            $('.xn_find').hide();
            $('.xn_no04').fadeOut(3000);
            $('.xn_ulmo li').eq(idx).fadeOut(1500);
            $('.xn_ulse li').eq(idx).fadeOut(1000);
            $('.xn_no01').fadeOut(3000);
            $('.xn_no02').fadeOut(3000);
            $('.xn_no03').fadeOut(3000);
            $('.xn_line').stop().animate({
                width: 0
            }, 1000, function () {
                //回到原来位置

                $('.xn_mask').children('div').children('div').eq(idx).stop().animate({
                    left: curleft,
                    top: curtop
                },350);

                $('.xn_mkfor').stop().animate({
                    left: 500,
                    top: 200
                }, 350, function () {
                    $('.xn_mask').children('div').children('div').css('transform', ' matrix(1,0,0,1,0,0)');
                    $('.xn_mask').children('div').children('div').css('opacity', '1');
                })


        })


    })

});


})

//实现跟着鼠标微动
window.onload = function () {
    //var xn_mo = document.getElementsByClassName('xn_mko')[0];
    var xn_list = document.getElementsByClassName('xn_gzyList')[0];
    //var $xn_mo = $(xn_mo);
    var $xn_list = $(xn_list);
    var mask = document.getElementsByClassName('xn_mask')[0];
    var $mask = $(mask);
    var box = document.getElementsByClassName('xn_gzycontent')[0];


    $mask.stop(true, true).animate({
        left: 50,
        top: 30
    }, 1500, function () {
        $mask.animate({
            left: 40,
            top: 20
        }, 1000, function () {
            $mask.animate({
                left: 30,
                top: 20
            }, 1000)
        })
    })

    //给页面注册鼠标移动事件
    mask.onmousemove = move;
    function move(e) {
        var x = getPage(e).pageX - $('.xn_gzycontent')[0].offsetLeft;
        var y = getPage(e).pageY - $('.xn_gzycontent')[0].offsetTop;

        x -= mask.offsetWidth / 2;
        y -= mask.offsetHeight / 2;
        x = x < 0 ? 0 : x;
        y = y < 0 ? 0 : y;
        x = x > box.offsetWidth - mask.offsetWidth ? (box.offsetWidth - mask.offsetWidth) : x;
        y = y > box.offsetHeight - mask.offsetHeight ? (box.offsetHeight - mask.offsetHeight) : y;


        $('.xn_flowo').animate({
            top: 1000,
            left: 300
        }, 20000)

        $('.xn_flowse').animate({
            top: 1000,
            left: 800
        }, 20000);

        $('.xn_flowth').animate({
            top: 1000,
            left: 500
        }, 20000);

        $('.xn_flowfor').animate({
            top: 1000,
            left: 1000
        }, 20000);

        $('.xn_flowsix').animate({
            top: 1000,
            left: 1200
        }, 20000);

        $('.xn_flowsev').animate({
            top: 1000,
            left: 1300
        }, 15000);

        $('.xn_floweig').animate({
            top: 1000,
            left: 2000
        }, 25000);

        $xn_list.stop(true, false).delay(100).animate({
            right: 11,
            top: 11
        }, 100, function () {
            $mask.animate({
                left: x - 10,
                top: y - 20
            }, 1000, function () {
                $mask.animate({
                    left: x + 10,
                    top: y + 20
                }, 1000, function () {
                    $mask.animate({
                        left: x + 5,
                        top: y + 30
                    }, 2000)
                })
            })
        })


        //$xn_mse.stop(true,false).delay(300).animate({
        //    left: 240,
        //    top: 20
        //},50, function () {
        //    $mask.stop(false,false).animate({
        //        left:x-10,
        //        top: y-30
        //    },1000, function () {
        //        $mask.animate({
        //            left: x+10,
        //            top: y+30
        //        },1000)
        //    })
        //})


        //
        //$mask.stop(true,false).delay(300).animate({
        //    left:x,
        //    top: y
        //},300, function () {
        //    $mask.animate({
        //        left:x-40,
        //        top: y-30
        //    },1000, function () {
        //        $mask.animate({
        //            left: x+10,
        //            top: y+30
        //        },2000, function () {
        //            $mask.animate({
        //                left: x+4,
        //                top: y+10
        //            },1000)
        //        })
        //    })
        //})
    }


    function getPage(e) {
        if (e.pageX) {
            return {
                pageX: e.pageX,
                pageY: e.pageY
            }
        } else {
            return {
                pageX: e.clientX + getScroll().scrollLeft,
                pageY: e.clientY + getScroll().scrollTop
            }
        }
    }

    function getScroll() {
        return {
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        }
    }


}