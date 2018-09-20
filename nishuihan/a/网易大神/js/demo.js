/**
 * Created by Administrator on 2017/2/8.
 */
$(function(){
    var pos = [

        {
            width:100,
            height:200,
            left:5,
            top:200,
            opacity:0,
            fontSize:12,
            z:3
        },

        {
            width:150,
            height:320,
            left:200,
            top:200,
            fontSize:12,
            opacity:0.5,
            z:3
        },
        {
            width:300,
            height:600,
            left:550,
            top:50,
            fontSize:26,
            opacity:1,
            z:4
        },
        {
            width:150,
            height:320,
            left:1050,
            top:200,
            fontSize:12,
            opacity:0.5,
            z:3
        },

    ];
    // 1. 获得要操作的对象
    var lis = $(".slide ul li");
    var arrow = $(".arrow");
    var flag  = true;

    // 2. 让每个li标签走到指定的位置
    assign();
    function assign(){
        $.each(pos,function (index,ele){
            // index是索引号  ele是数组中的对象
            lis.eq(index).css("zIndex",ele.z).stop().animate(ele,500,function (){
                   flag = true;
            });
        });
    }

    // 3. 鼠标移入大盒子的时候，要显示左右按钮 ,离开大盒子，要隐藏左右按钮
    $(".wrap").hover(function (){
           arrow.fadeIn();
    },function (){
           arrow.fadeOut();
    })
    // 4. 给右侧按钮注册事件
    $(".next").on("click",function (){
        if(flag){
            flag = false;
            pos.unshift(pos.pop());
            assign();
        }

    })
    // 5. 给左侧按钮注册事件
    $(".prev").on("click",function (){
        if(flag){
            flag = false;
            pos.push(pos.shift());
            // 数组现在是重新排列的了，再让li标签根据新的数组，重新生成自己的样式
            assign();
        }

    })
})