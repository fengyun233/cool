/*
** Create by Administrator on 2018/8/10
*/
        //顶部广告栏
          $(function () {
        $('#ost_ad').on('mouseenter',function (  ) {
            $('#ost_g').css('display','block');
        });
        $('#ost_g').on('mouseleave',function (  ) {
            $('#ost_g').css('display','none');
        });
        $('.ost_total .grow>a').on('mouseenter',function (  ) {
            $(this).css('color','red');
        });
        $('.ost_total .grow>a').on('mouseleave',function (  ) {
            $(this).css('color','');
        });
        $('.ost_total .rank').on('mouseenter',function (  ) {
            $('.bigbox').show();
            $(this).css('color','red');
        });


           //新闻栏的导航栏
              $('.mdNav>li').on('click',function (  ) {
                  var index=$(this).index();
                    $(this).append('<div class="underline"></div>');
                   $ ( this ).siblings () .children('div.underline').remove();
                  // $(this).addClass('underline');
                  $('.newList>ul.neLi').eq(index).show().siblings('ul').hide();
                    $('.path #change').text($(this).text());
              });

              $('.neLi>li').on('mouseenter',function (  ) {
                  $(this).children('.cltip').css('color','#dd931f')
              });
              $('.neLi>li').on('mouseleave',function (  ) {
                  $(this).children('.cltip').css('color','')
              });
              $('.index_path').on('mouseenter',function (  ) {
                  $(this).css({
                      height:'17px',
                      display:'inline-block',
                      borderBottom:'1px dashed #ddd'
                  });
              });
              $('.index_path').on('mouseleave',function (  ) {
                  $(this).css({
                      height:'',
                      display:'',
                      borderBottom:''
                  });
              });
              //点击下一页按钮
                var index=0;
              $('.page>a.dm').on('click',function (  ) {

               index++;
               if(index>0) {
                  $ ( ".page>.up" ).show();
               }
                  if(index > 7){
                      index = 7;
                  }
                  $('.newList>ul.neLi').eq(index).show().siblings('ul').hide();
                  console.log ( index ) ;
                  $ ( ".mdNav>li" ).eq ( index ) .append('<div class="underline"></div>');
                  $ ('.mdNav>li' ).eq ( index ).siblings () .children('div.underline').remove();

              });

              //点击上一页
              $('.page>a.up').on('click',function (  ) {
                  index--;
                  if(index<1){
                      index=0;
                      $ ( ".page>.up" ).hide();
                  }
                  $('.newList>ul.neLi').eq(index).show().siblings('ul').hide();
                  console.log ( index ) ;

                  $ ( ".mdNav>li" ).eq ( index ) .append('<div class="underline"></div>');
                  $ ('.mdNav>li' ).eq ( index ).siblings () .children('div.underline').remove();
              });




              //头部列表点击事件
            $('.news >li').on('click',function (  ) {
              var index=$(this).index();
                console.log ( index );
                $( ".newList .neLi" ).eq ( index ) .show().siblings('ul').hide();
                 $ ( ".mdNav>li" ).eq ( index ) .append('<div class="underline"></div>');
                 $ ('.mdNav>li' ).eq ( index ).siblings () .children('div.underline').remove();
                $('.path #change').text($(this).text());
            });
            $('.news .one').off('click')   ;



            //腾讯排行榜
              $(function(){
                  //获取当前的li标签添加鼠标移入事件
                  console.log($('.bigbox .ost_rank li.rank-item'));//col_body中的li标签
                  $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
                      console.log($(this).children('div.rank-name-game'));//'div.rank-name-game'
                      $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
                      console.log($(this).children('div.rank-name-game').show().parent());
                  })
              });
              $('.bigbox').on('mouseleave',function (  ) {
                  $('.bigbox').hide();
                  $('.ost_total .rank').css('color','');
              });
              $('.bigbox a').on('mouseenter',function (  ) {
                  $(this).css('color','#ddd');
              })
              $('.bigbox a').on('mouseleave',function (  ) {
                  $(this).css('color','');
              })

           });


