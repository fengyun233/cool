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
    // 1. ���Ҫ�����Ķ���
    var lis = $(".slide ul li");
    var arrow = $(".arrow");
    var flag  = true;

    // 2. ��ÿ��li��ǩ�ߵ�ָ����λ��
    assign();
    function assign(){
        $.each(pos,function (index,ele){
            // index��������  ele�������еĶ���
            lis.eq(index).css("zIndex",ele.z).stop().animate(ele,500,function (){
                   flag = true;
            });
        });
    }

    // 3. ����������ӵ�ʱ��Ҫ��ʾ���Ұ�ť ,�뿪����ӣ�Ҫ�������Ұ�ť
    $(".wrap").hover(function (){
           arrow.fadeIn();
    },function (){
           arrow.fadeOut();
    })
    // 4. ���Ҳఴťע���¼�
    $(".next").on("click",function (){
        if(flag){
            flag = false;
            pos.unshift(pos.pop());
            assign();
        }

    })
    // 5. ����ఴťע���¼�
    $(".prev").on("click",function (){
        if(flag){
            flag = false;
            pos.push(pos.shift());
            // �����������������е��ˣ�����li��ǩ�����µ����飬���������Լ�����ʽ
            assign();
        }

    })
})