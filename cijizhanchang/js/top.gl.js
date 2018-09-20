/**
 * Created by 95324 on 2018/8/12.
 */
$(function(){
    $('.list .tab-item ').on('click',function(){
        var idx=$(this).index();
        $('.tx1 .list1 ul').eq(idx).show().siblings().hide();


        $(this).children().addClass("active").parent().siblings().children().removeClass("active");
    })



})

