/*
** Create by Admin on 2018/8/10
*/

$(function(){
  var jfArr = [
    {idx:1,category:'business'},
    {idx:2,category:'html'},
    {idx:3,category:'wp'},
    {idx:4,category:'business'},
    {idx:5,category:'business'},
    {idx:6,category:'html'},
    {idx:7,category:'wp'},
    {idx:8,category:'business'},
    {idx:9,category:'html'},
    {idx:10,category:'wp'},
    {idx:11,category:'business'},
    {idx:12,category:'business'}
  ];
  var positionArr = [];
  for(var i = 0 ; i < $('#zjf-ul2>li').length; i++){
    positionArr.push($($('#zjf-ul2>li')[i]).position());
  }

//----------------------------------------------------------------------------------------------------------

  //鼠标移入图片显示遮罩层
  $('#zjf-ul2').on('mouseenter','.zjf-img',function(){
    $(this).find('span').stop(true,false).fadeTo(400,'0.5');//animate({'opacity': '0.6','display':'block'});
  });
  //鼠标移出图片显示遮罩层
  $('#zjf-ul2').on('mouseleave','.zjf-img',function(){
    $(this).find('span').stop(true,false).fadeTo(400,0);//.animate({'opacity': '0'});
  });



//----------------------------------------------------------------------------------------------------------


  $('#zjf-ul1 .segment-1').on('click',function(){
    //获取当前页面的li标签
    var $liList = $('#zjf-ul2>li');

    //给当前li标签添加类selected，其他兄弟li移除selected
    $(this).addClass('selected').siblings('li').removeClass('selected');
    //获取类型
    var dateValue = $(this).children('a').attr('data-value')
    var idxArr = [];
    var num = 0;
    var sut = 0;



    for(var i = 0 ; i < jfArr.length; i++){

      $($liList[i]).css({'position':'absolute'});
      $($liList[i]).css(positionArr[i]);

      if(dateValue == jfArr[i].category){
        //移动图片
        if($liList[i] && $($liList[i]).hasClass(dateValue)){
          $($liList[jfArr[i].idx-1]).stop(true,false).animate(positionArr[num],500);
        }


        num++;
        idxArr.push(jfArr[i]);
      }else if(dateValue == 'all'){
        if($($liList[sut]).hasClass(jfArr[i].category)){
          $($liList[sut]).stop(true,false).animate(positionArr[jfArr[i].idx-1],500,function () {
            establish(idxArr);
          });
          sut++;
        }
        idxArr.push(jfArr[i]);
        num++;
      }else{
        $($liList[jfArr[i].idx-1]).stop(true,false).fadeOut(500,0,function () {
          establish(idxArr);
        });
      }
    }
    if(num>7){
      $('#zjf-ul2').css({'height':'582'});
    }else if(num>3){
      $('#zjf-ul2').css({'height':'388'});
    }else{
      $('#zjf-ul2').css({'height':'194'})
    }

    // for(var i = 0 ; i < $liList.length; i++){
    //   if($liList){
    //     if()
    //   }else{
    //     break;
    //   }
    // }










    // $('#zjf-ul2>li').stop(true,false).animate({'opacity': '0'},300,function () {
    //
    // });

  });


  //创建要插入的li文本
  function establish(idxArr) {

    $('#zjf-ul2').empty();

    for(var i = 0 ; i < idxArr.length; i++){
      var $lis = $('<li class="'+idxArr[i].category+'">'+'<div class="zjf-img">'+
          '<a class="image" href="#">'+
          '<span class="shade"></span>'+
          '<img src="images/content/pf/pf'+idxArr[i].idx+'.jpg" alt="">'+
          '</a>'+
          '</div>'+
          '<span class="shadowimg"></span>'+
          '<div class="zjf-text">'+
          '<h2>Lorem ipsum dolor sit amet</h2>'+
          '</div>'+'</li>');

      $('#zjf-ul2').append($lis);

      //$('#zjf-ul2>li').css('opacity','1');
      //判断当前添加的是否是第4个或是4的倍数；是就添加类nomargin
      if((i+1)%4==0) {
        $('#zjf-ul2>li').eq(i).addClass('nomargin')
      }
    }
  }




});