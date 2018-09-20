$(function () {
    // 找到分类列表导航里面的a添加点击事件
    $('.content .nav-title a').click(function () {
        // 拿到当前在父元素下的li的索引
        var $index = $(this).parent().index();
        //    点击A添加item类改变字体颜色
        $(this).parent().addClass('item').siblings().removeClass('item');
        // 根据li的索引找到对应要显示的元素使用show()方法显示  其他兄弟元素影藏
        $('.block_list .section-container').eq($index).show().siblings().hide()
        // 点击后获取当前元素与定位父元素的距离
        var offsetX = $(this).position().left;
        //找到下面滑动边框设置获得的当前的定位left
        $('.content .nav-title .movebor').animate({
            left: offsetX
        }, 800)
    })
    


    $('.lab a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    })
    // 武器锚点动画
    $('.section-container1 .lab a').click(function () {
        var $index = $(this).parent().index();
        var offsetTop = $('#qiang-' + $index + ' .big-tit').offset().top;
        $("html, body").animate({
            scrollTop: offsetTop + "px"
        }, 800);
        return false;
    })
    // 配件锚点动画
    $('.section-container2 .lab a').click(function () {
        var $index = $(this).parent().index();
        var offsetTop = $('#parts-' + $index ).offset().top;
        $("html, body").animate({
            scrollTop: offsetTop + "px"
        }, 800);
        return false;
    })
    // 物质锚点动画
    $('.section-container3 .lab a').click(function () {
        var $index = $(this).parent().index();
        var offsetTop = $('#materials-' + $index ).offset().top;
        $("html, body").animate({
            scrollTop: offsetTop + "px"
        }, 800);
        return false;
    })

    // 操作地图
    var num = 0;
    $('.operate .icon-des li:nth-child(1)').click(function(){
        $('.map-icon1').toggle();
        $('.operate .icon-des li:nth-child(1)').find('b').toggle();
    });
    $('.operate .icon-des li:nth-child(2)').click(function(){
        $('.map-icon2').toggle();
        $('.operate .icon-des li:nth-child(2)').find('b').toggle();
    });
    $('.operate .icon-des li:nth-child(3)').click(function(){
        $('.map-icon3').toggle();
        $('.operate .icon-des li:nth-child(3)').find('b').toggle();
    });
    $('.operate .icon-des li:nth-child(4)').click(function(){
        $('.map-icon4').toggle();
        $('.operate .icon-des li:nth-child(4)').find('b').toggle();
    });


    $('.btn-box a:nth-child(1)').click(function(){
        $('.operate .icon-des li:nth-child(1)').click()
        $('.operate .icon-des li:nth-child(2)').click()
        $('.operate .icon-des li:nth-child(3)').click()
        $('.operate .icon-des li:nth-child(4)').click()
        $(this).text() == "隐藏全部" ? $(this).text('显示全部') : $(this).text('隐藏全部')
    })

    $('.btn-box a:nth-child(2)').click(function(){
        $('.map-grid').toggle();
        $(this).text() == "隐藏网格" ? $(this).text('显示网格') : $(this).text('隐藏网格')
    })


    // 切换两张地图
    $('.map a').click(function(){
        var $index = $(this).parent().index();
        console.log($index);
        
        $('.maps .map-img').eq($index).show().siblings().hide()
    })

})