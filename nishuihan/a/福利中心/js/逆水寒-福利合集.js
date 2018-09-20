
$(function (  ) {
    var $shadow=$(".zj-center .ct-top .shadow")//白色影子
    // if ($(".options").position().left==$(".options>a").position().left){
    //
    // }
    // var index=$(".options>a").index()
    $(".options>a").on("mouseenter",function  (  ) {
       var left=$(this).position().left
        var idx=$(this).index()
        console.log ( left )
        $shadow.stop(true,false).animate({
            left:left
        },100,function (  ) {
            if (idx==0){
                $($(".options>a")[0]).css("background-position","0px -220px")
                $($(".options>a")[1]).css("background-position","0px  -135px")
                $($(".options>a")[2]).css("background-position","-45px 0px")
            } if (idx==1){
                $($(".options>a")[1]).css("background-position","-253px  0px")
                $($(".options>a")[0]).css("background-position","-250px -87px")
                $($(".options>a")[2]).css("background-position","-45px 0px")
            } if (idx==2){
                $($(".options>a")[2]).css("background-position","-215px  -220px")
                $($(".options>a")[0]).css("background-position","-250px -87px")
                $($(".options>a")[1]).css("background-position","0px  -135px")
            }
        })
    })

})

$(function (  ) {
    //需求分析
    var  gds=[]
    var Rm=[2,2,3,2,3,5,5,4,4,7,5,5,5,5]
    var num=13
    var nS=0
    var $bgGrey=$(".zero-two .Bg-grey")
    for(var i=1;i<14;i++){
        /*var n=i;*/
        $bgGrey.attr('id','Bg-grey'+i);
        $(".zero-two").append($bgGrey.clone(true));
    }
    $bgGrey.attr('id','Bg-grey0');
    //遍历数组删除多余的img的父盒子goods元素  删除数等于7-需要数=要删除数
    for (var i=0; i<Rm.length;i++) {
        var arr=7-Rm[i]
        for (var j=0; j<arr;j++) {
            $("#Bg-grey"+i+">"+"."+j).remove()
        }
    }
//建立等级数组arr //想法不建立数组 用判断 没次循环i*5 修改所有grade的对应数字
    for (var i=0; i<14;i++) {
           var gs =$("#Bg-grey"+i+">"+".grade")
        if (i*5==0){
            gs.html("等级"+i)
        }else{
            gs.html("等级"+i*5)
        }
         $("#Bg-grey13").css("margin-bottom",30)
    }
//修改 goods元素 子元素的img标签的地址
//for循环 每个img 一一修改地址
    var imgS=$(".zero-two img")
    // console.log ( imgS )
    for (var i=1; i<57;i++) {
        imgS.eq(i).attr("src","./逆水寒-物品/"+i+".png")
        }
});

//思路给没先克隆所有物品栏 没个物品栏7个
//1建立数组 没个物品栏需要的数
//遍历数组删除多余的img的父盒子goods元素  删除数等于7-需要数=要删除数
//建立等级数组arr //想法不建立数组 用判断 没次循环i*5
//for 修改所有grade的对应数字

//修改 goods元素 子元素的img标签的地址
//for循环 每个img 一一修改地址

//for循化每个p 一一修改p中间的文字

//思路获取tabs 标签
//设置属性
$(function (  ) {
    var $tabs1=$(".tabs1")
    var $tabs2=$(".tabs2")
    var $tabs3=$(".tabs3")
    var $options=$(".options>a")
    $options.on("mouseenter",function (  ) {
        var idx=$(this).index()
        if (idx==0){
            $tabs1.show(800)
            $tabs2.hide(800)
            $tabs3.hide(800)
        }else if (idx==1){
            $tabs1.hide(800)
            $tabs2.show(800)
            $tabs3.hide(800)
        }else if (idx==2){
            $tabs1.hide(800)
            $tabs2.hide(800)
            $tabs3.show(800)
        }
        /*if (idx==0){
            $tabs1.css("display","block")
            $tabs2.css("display","none")
            $tabs3.css("display","none")
        }else if (idx==1){
            $tabs1.css("display","none")
            $tabs2.css("display","block")
            $tabs3.css("display","none")
        }else if (idx==2){
            $tabs1.css("display","none")
            $tabs2.css("display","none")
            $tabs3.css("display","block")
        }*/
    })
})