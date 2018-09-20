/*
** Create by Administrator on 2018/8/13
*/

          $(function () {


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

           });
