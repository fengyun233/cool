/* play播放按钮开始代码*/

//$(function (){
//    $('.play').on('click',function(){
//        $('#show').css('display','block').siblings('span').css('display','block');
//        $('#bg').css('display','block')
//    })
//
//
//})

    $('li.rank-item').on('mouseenter',function(){
        $(this).addClass('current').siblings('li').removeClass('current');
    });
    $('#rank_control3 li.rank-item').on('mouseenter',function(){
        $(this).addClass('current').siblings('li').removeClass('current').parent().parent().siblings('.col-body').find('li').removeClass('current')
    });

var py = document.getElementById('play');
var show = document.getElementById("show");
var tubiao = document.getElementById("tubiao");
var chacha = document.getElementById("chacha");
var bg = document.getElementById('bg');
var vid = document.getElementById('vid');
// console.log(vid);
py.onclick = function () {
    show.style.display = "block";
    bg.style.display = 'block';
    chacha.style.display = "block";
    //    vid.setAttribute('autoplay','autoplay');
}

chacha.onclick = function () {
    show.style.display = "none";
    bg.style.display = 'none';
    chacha.style.display = "none";
    location.reload();
}
tubiao.onmouseover = function () {
    tubiao.style.width = '115px'
    tubiao.style.height = "115px"
}
tubiao.onmouseout = function () {
    tubiao.style.width = '105px'
    tubiao.style.height = "105px"
}
/*play播放按钮开始代码*/

/*上部轮播图开始代码*/
$(function () {
    var index = 0;
    var timed = null;

    timed = setInterval(function () {
        index++;
        if (index > 4) {
            index = 0;
        }
        $(".center>ul>li").eq(index).show().siblings('li').hide();
        $(".liks>ul>li").eq(index).addClass('current').siblings('li').removeClass('current');
    }, 1000);

    $('.center').mouseover(function () {
        clearInterval(timed)
    });
    $(".liks>ul>li").on('click', function () {
        index = $(this).index();
        $(".center>ul>li").eq(index).show().siblings('li').hide();
        $(this).addClass('current').siblings('li').removeClass('current');
    })

    $('.center').mouseout(function () {
        timed = setInterval(function () {
            index++;
            if (index > 4) {
                index = 0;
            }
            $(".center>ul>li").eq(index).show().siblings('li').hide();
            $('.liks>ul>li').eq(index).addClass('current').siblings('li').removeClass('current');
        }, 1000);
    });
})

/*上部轮播图结束代码*/


/**主播轮播开始代码*/
$(function () {
    var ind = 0;
    var ted = null;
    
    $(".zuo").on('click', function () {
        ind--;
        if (ind <=0) {
            ind=5;
        }
        console.log(ind);
        $(".botu>ul").animate({'left':-100*ind},50 ,"linear");
     });
     $(".you").on('click', function () {
        ind++;
        if (ind >=5) {
            ind=0;
        }
        console.log(ind);
        $(".botu>ul").animate({'left':-100*ind},50 ,"linear");
     });
     ted = setInterval(function () {
        ind++;
        if (ind >=5) {
            ind=0;
        }
        $(".botu>ul").animate({'left':-100*ind},50 ,"linear");
     },3000)

})


/**主播轮播结束代码*/



/**新闻tab切换开始代码*/
$(function () {
    $('.sss>li').on('click', function () {

        $(this).children('i').addClass('active').parent().siblings('li').children('i').removeClass('active');
        var idx = ($(this).children('i').addClass('active').parent().index()) / 2;

        $('.news').eq(idx).addClass('select').siblings('div').removeClass('select');
    })
})
/**新闻tab切换开始代码*/



/**视频中心tab切换开始代码*/
$(function () {
    $('.vd').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx = ($(this).index()) / 2;
        console.log(idx);
        $('.new').eq(idx).addClass('select').siblings('div').removeClass('select');
    })
})
/**视频中心tab切换开始代码*/



/**赛事中心tab切换开始代码*/
$(function () {
    $('.tab-item').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx = ($(this).index()) / 2;
        console.log(idx);
        $('.conn').eq(idx).addClass('select').siblings('div').removeClass('select');
    })
})
/**赛事中心tab切换开始代码*/


/**攻略中心tab切换开始代码*/
$(function () {
    $('.tab').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx = ($(this).index()) / 2;
        $('.main').eq(idx).addClass('select').siblings('div').removeClass('select');
    })
})
/**攻略中心tab切换开始代码*/

/**游戏tab切换开始代码*/
$(function () {
    $('.wq>li').on('click', function () {

        $(this).children('i').addClass('active').parent().siblings('li').children('i').removeClass('active');
        var idx = ($(this).children('i').addClass('active').parent().index());
        $('.data').eq(idx).addClass('select').siblings('div').removeClass('select');
    })
})
/**游戏tab切换结束代码*/

/**同人专区tab切换开始代码*/
$(function () {

    $('.tongren').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx = ($(this).index()) / 2;
        $('.doujin').eq(idx).addClass('select').siblings('div').removeClass('select');
    })
})
/**同人专区tab切换结束代码*/

/*底部轮播图开始代码*/
$(function () {
    var index = 0;
    var timeid = null;
    $(".arr-right").click(function () {
        index++;
        if (index > 4) {
            index = 0;
        }
        $(".lunbo>ul>li").eq(index).show().siblings('li').hide();
        $(".lik>ul>li").eq(index).addClass('current').siblings('li').removeClass('current');
    });

    $(".arr-left").click(function () {
        index--;
        if (index < 0) {
            index = 4;
        }
        $(".lunbo>ul>li").eq(index).show().siblings('li').hide();
        $(".lik>ul>li").eq(index).addClass('current').siblings('li').removeClass('current');
    });

    $(".lik>ul>li").on('click', function () {
        index = $(this).index();
        $(".lunbo>ul>li").eq(index).show().siblings('li').hide();
        $(this).addClass('current').siblings('li').removeClass('current');
    })

    timeid = setInterval(function () {
        index++;
        if (index > 4) {
            index = 0;
        }
        $(".lunbo>ul>li").eq(index).show().siblings('li').hide();
        $(".lik>ul>li").eq(index).addClass('current').siblings('li').removeClass('current');
    }, 2000);

    $('.lunbo').mouseover(function () {
        clearInterval(timeid)
    });

    $('.lunbo').mouseout(function () {
        timeid = setInterval(function () {
            index++;
            if (index > 4) {
                index = 0;
            }
            $(".lunbo>ul>li").eq(index).show().siblings('li').hide();
            $(".lik>ul>li").eq(index).addClass('current').siblings('li').removeClass('current');
        }, 2000);
    });
})

/*底部轮播图结束代码*/