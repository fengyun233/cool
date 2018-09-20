var left = document.getElementById("left");
var tb = document.getElementById("tb");
var li = tb.getElementsByTagName("li");
var tb_c = left.getElementsByClassName("tb_c");
for (var i = 0 ; i < li.length ; i++){
    li[i].setAttribute( "index" , i );
    li[i].onmouseover = function () {
        this.className = "tb_active";
        var index = this.getAttribute("index");
        tb_c[index].className = "tb_c";
        for (var j = 0 ; j < li.length ; j++){
            if (li[j] != this){
                li[j].className = "";
                tb_c[j].className += " tb_c_none";
            }
        }
    }
}

var wrapper_in = document.getElementById("wrapper_in");
        var ul2 = document.getElementById("slick_ul");
        var slick_prev = document.getElementById("slick_prev");
        var slick_next = document.getElementById("slick_next");
        var Carousel = 0;
        slick_prev.onclick = function () {
            if(Carousel == 0){
                Carousel = ul2.children.length - 3;
            ul2.style.left = -Carousel * wrapper_in.offsetWidth + 'px';
            }
            Carousel--;
            animationMove(ul2,-Carousel*wrapper_in.offsetWidth)
        }
        slick_next.onclick = function () {
            if(Carousel == ul2.children.length - 3){
                Carousel = 0;
                ul2.style.left = '0px';
            }
            Carousel++;
            animationMove(ul2,-Carousel*wrapper_in.offsetWidth)

        }

        var wrapper_in_1 = document.getElementById("wrapper_in_1");
        var ul1 = document.getElementById("slick_ul_1");
        var slick_prev_1 = document.getElementById("slick-prev_1");
        var slick_next_1 = document.getElementById("slick-next_1");
        var Carousel1 = 0;
        slick_prev_1.onclick = function () {
            if(Carousel1 == 0){
                Carousel1 = ul1.children.length - 3;
            ul1.style.left = -Carousel1 * wrapper_in_1.offsetWidth + 'px';
            }
            Carousel1--;
            animationMove(ul1,-Carousel1*wrapper_in_1.offsetWidth)
        }
        slick_next_1.onclick = function () {
            if(Carousel1 == ul1.children.length - 3){
                Carousel1 = 0;
                ul1.style.left = '0px';
            }
            Carousel1++;
            animationMove(ul1,-Carousel1*wrapper_in_1.offsetWidth)

        }

        $(function () {
            $("#cc-video-sub-list li").on("mouseenter" , function(){
                $(this).css({
                    "opacity" : "0.9",
                })
                $(this).children().children().children(".cc-video-shade").css({
                    "display": "block"
                })
            })
            $("#cc-video-sub-list li").on("mouseleave" , function(){
                $(this).css({
                    "opacity" : "1",
                })
                $(this).children().children().children(".cc-video-shade").css({
                    "display":"none"
                })
            })
        })

        var column = id("column");
        var ul = id("slides");
        var ol = id("navigations");
        column.onmouseover = function (  ) {
            clearInterval(timeID);
        }
    
        column.onmouseout = function (  ) {
            timeID =  setInterval(nexPage,1000);
        }

        var autoplay_slide = 0;

        function nexPage (  ) {
            if(autoplay_slide == ul.children.length - 1){
                autoplay_slide = 0;
                ul.style.left = '0px';
            }
            autoplay_slide++;
            animationMove(ul,-autoplay_slide*column.offsetWidth)
            for(var i = 0;i<ol.children.length;i++){
                if(i == autoplay_slide){
                    ol.children[i].className = 'active';
                }else{
                    ol.children[i].className = '';
                }
            }
            if(autoplay_slide == ul.children.length - 1){
                ol.children[0].className = 'active';
            }
        }
        var timeID =  setInterval(nexPage,2000);

        for(var i = 0;i<ol.children.length;i++){
            ol.children[i].setAttribute('yemaIndex',i);
            ol.children[i].onmouseover = function (  ) {
                var yemaIndex = this.getAttribute('yemaIndex');
                autoplay_slide = yemaIndex;
                animationMove(ul,-autoplay_slide*column.offsetWidth);
                for(var j = 0;j<ol.children.length;j++){
                    if(ol.children[j] == this){
                        this.className = 'active';
                    }else{
                        ol.children[j].className = '';
                    }
    
                }
            }
        }
        