
//主体部分图片鼠标移入移出事件
$(function () {

    $('.postimg').on('mouseenter',function() {
            $(this).children('img').css({
                border: '5px solid #ffcd56'
            })
        $(this).siblings('h2').children('a').css({
            color:  '#ffa600',
        })
    });


    $('.postimg').on('mouseleave',function() {
        $(this).children('img').css({
            border: '5px solid #d3d2d2'
        })
        $(this).siblings('h2').children('a').css({
            color:  '#2d2d2d',
        })
    });

    //
    $(window).on('keydown', function (e) {
        switch (e.keyCode) {
            case 0x0D:
                var test= $('.form').children('input').text();
                $('.form').children('input').text(test);
                break;
        }

    })

//主体部分右边的搜索框的获取焦点和失去焦点事件0x0D
    $('.form').children('input').on('focus',function(){
        $(this).parent().css({
            border:'1px solid red' ,
        })

        if($(this).val()==this.defaultValue){
            $(this).val('');
        }
    })
//如果内容为默认值,获得焦点才应该变为空.
    $('.form').children('input').on('blur',function(){
        $(this).parent().css({
            border:'1px solid #ededed' ,
        })
        if($(this).val()==''){
            $(this).val(this.defaultValue);
        }
    })


})


