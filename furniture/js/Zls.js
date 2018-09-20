
// 右边盒子轮播图
$(function (  ) {
    var index = 0;
    $('.arrows-right').on('click',function (  ) {
        index++;
        if(index == 3){
            index = 0;
        }
        $('.middle li').eq(index).fadeIn(200).siblings('li').fadeOut(200);
    });
    $('.arrows-left').on('click',function (  ) {
        index--;
        if(index == 0){
            index = 2;
        }
        $('.middle li').eq(index).fadeIn(200).siblings('li').fadeOut(200);
    });
});
