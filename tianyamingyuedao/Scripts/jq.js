
        //    鼠标移入背景变色
        $(function () {
            //头部函数
            $('.xn_lq').mouseenter(function () {
                $("#xn_nba").show().css('z-index','2');
            })
            $('.xn_lq').mouseleave(function () {
                $("#xn_nba").hide();
            })
        
            
            //全新内容  精彩呈现
            $("#ncont").children().mouseenter(function () {//鼠标移入
                $('div.limask1').stop(true,true);
                $("span.spanmask").stop(true,true);
                $("span.lookup").stop(true,true);
                $(this).children('div.limask1').animate({
                    'height':'291px'},500);
                // $('div.limask1').stop(true,false);
                // console.log($(this).children('div.limask'));
                //$(this).css({
                    // "backgroundColor": "#2fc3a3", "opacity": "0.9"
                //})

                $(this).children().children("span.spanmask").animate({
                    'height':'25px'},500,function(){
                        $(this).show();
                    });
                $(this).children().children("span.lookup").animate({
                    'height':'0px'},500,function(){
                        $(this).hide();
                    });
                // $(this).children().children("span").css({
                //     "backgroundColor": "#1c1c1c", "color": "#ffffff"
                // })
            })
            $("#ncont").children().mouseleave(function () {//鼠标移出
                $('div.limask1').stop(true,true);
                $("span.spanmask").stop(true,true);
                $("span.lookup").stop(true,true);
                $(this).children('div.limask1').animate({
                    'height':'0px'},500);

                    $(this).children().children("span.spanmask").animate({
                        'height':'0px'},500,function(){
                            $(this).hide();
                    });
                    $(this).children().children("span.lookup").animate({
                        'height':'25px'},500,function(){
                            $(this).show();
                    });

                    // $('div.limask1').stop(true,false);
                // $(this).css("backgroundColor", "")
                // $(this).children().children("span").css("backgroundColor", "#2fc3a3")
            })

            //轮播淡淡出现、淡淡隐藏


            //新手指南  游戏特色 活动中心  设定站  鼠标移入移出
            $(".ols").mouseenter(function () {
                console.log($(this).children().children('div.over').show().parent().parent().siblings().children().children('div.over').hide());
            });

            // 手风琴
            $(".yihua").children().mouseenter(function () {
                $(this).children("img").hide().siblings().show().parent().siblings().children('img').show().siblings().hide()
            });
            //右下角关闭广告按钮
            $('#nav').click(function () {
                $('#ost_bpb').fadeIn();
            })
            $('.ost_bpb_close').click(function () {
                $('.ost_bpb_close').parent().parent().fadeOut();
            })
            //播放视频
            $('#box2 .main #content1 a.video').click(function () {
                $('.gamevideo').show();
                $('.masklayer').show();
            });
            //关闭视频
            $('.close_video').click(function () {
                $('.gamevideo').hide();
                $('.masklayer').hide();
            });

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
             //腾讯游戏排行榜鼠标移出
            $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
            $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
          })
          

              /*
              四重新手好礼
               */
              //选择列表
              $('.present-top .taba').on('click',function (  ) {
                var idx=$(this).index();
                $(this).addClass('moren').siblings('a').removeClass('moren')
                $(this).append('<i class="wr"></i>');
                $ ( this ).siblings () .children('i.wr').remove();
                $('.present-content .gif-ul').eq(idx).show().siblings('ul').hide()
            })
            //礼品介绍
            $('.gif-ul>.gif-ls').on('mouseenter',function (  ) {
                $(this).children().show();
            });
            $('.gif-ul>.gif-ls').on('mouseleave',function (  ) {
                $(this).children().hide();
            });

            //关闭按钮
            $('.present .present-close'). on('click',function (  ) {
                $(this).parent().hide();
            })




           /*
           特色玩法
            */
          //标题选择栏

            $('.feature .help').on('click',function (  ) {
                $(this).addClass('flower').siblings('.help').removeClass('flower');
                $(this).append('<i class="wr"></i>');
                $ ( this ).siblings () .children('i.wr').remove();
                var idx=$(this).index();
                $('.feature .feature-one').eq(idx).show().siblings('div').hide();

                return false;
            })

            //关闭按钮
            $('.feature .feature-close'). on('click',function (  ) {
                $(this).parent().hide();
            })

          //立即查看  立即前往
        //   $('.forward').on('click',function(){
        //       alert(1);
        //   });
        })
