/**
 * Created by Administrator on 2018/8/12 0012.
 */


$(function(){
    $("#tab-menu li").on("click",function(){
        var index = $(this).index();
        var divs = $(".main .center .v1");
        for( var i = 0;i<divs.length;i++){
            if(divs[i] == divs[index]){
                $(divs[i]).show();
            }else{
                $(divs[i]).hide();
            }
        }
    })
    $(".main .center .tab li").on("click",function(){
        $(this).children("a").addClass("on").parent().siblings().children().removeClass("on");
    })
})



