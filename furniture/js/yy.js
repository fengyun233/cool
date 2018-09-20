$(function (){
//获取之前的a标签
  var image=$('.zjf-content .image');
  //获取之后的a标签
  var image1=$('.yy-contentimg .image')
  // 给a标签注册点击事件,弹出索引对应的图片显示
image.on('click',function () {
  // 获取索引
  var index =$(this).parent().parent().index();
  console.log(index);
  $('.yy-contentimg li ').eq(index).css('display','block')
  $('.pp_overlay').css('display','block')
  $('.yy-contentimg li ').eq(index).css(' z-index','9501')
})
  //声明一个标量,用来储存当前显示图片的索引
  var index1=0;
  //给右焦点一个点击事件,显示下一张
$('.bigr').on('click',function (){
  index1++;
  console.log(index1);
  if(index1==12){
    index1 = 0;
  }
$('#yy li').eq(index1).fadeIn(500).siblings('li').fadeOut(500);
})
  //给左边焦点点击事件,显示上一张.
  $('.bigl').on('click',function (){
    index1--;
    console.log(index1);
    if(index1<0){
      index1 =11;
    }
    $('#yy li').eq(index1).fadeIn(500).siblings('li').fadeOut(500);
  })
  $('.close').on('click',function (){
    $('#yy li').css('display','none')
    $(".pp_overlay").css('display','none')
    clearInterval(timeID);
  })
  //下面的按钮和上面的按钮一样
  $('.arrow-next').on('click',function (){
    index1++;
    if(index1==12){
      index1 = 0;
    }
    $('#yy li').eq(index1).fadeIn(500).siblings('li').fadeOut(500);
  })
  $('.arrow-previous').on('click',function (){
    index1--;
    if(index1<0){
      index1 =11;
    }
    $('#yy li').eq(index1).fadeIn(500).siblings('li').fadeOut(500);
  })
  // $('#yy li').eq(index1).on('mouseenter',function (){
  // 	$('.bigl,.bigr').css('display','block')
  // })
  // $('.image').on('mouseout',function (){
  // 	$('.bigl,.bigr').css('display','none')
  // })


var timeID=null;
  $('.play').on('click',function (){
    clearInterval(timeID);
     timeID=setInterval(function (  ) {
        index1++;
        if(index1==12){
          index1 = 0;
        }
        $('#yy li').eq(index1).fadeIn(500).siblings('li').fadeOut(500);
      },1000);
    $('.play').attr('class','pause')
    });
//暂停 清除定时器
  $('.pause').on('click',function (){
    $('.pause').attr('class','play');
    clearInterval(timeID);
  });

  //第二页
 for(var i = 0 ; i <$('#yy li') .length; i++){
  if(i%2!=0){
    index1= i
  }
   $('#yy li').eq(i)
 }

  })








