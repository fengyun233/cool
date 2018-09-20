$(function(){
    //获取当前的li标签添加鼠标移入事件
  console.log($('.bigbox .ost_rank li.rank-item'));//col_body中的li标签
  $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
    console.log($(this).children('div.rank-name-game'));//'div.rank-name-game'
    $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
    console.log($(this).children('div.rank-name-game').show().parent());
  })
});