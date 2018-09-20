/**
 * Created by ŷ��Ƽ on 2018/8/9.
 */


//��һ���ֲ�ͼ


var column = document.getElementById('column');
var ul = document.getElementById('slidslies');
var ol = document.getElementById('navigations');
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
var timeID =  setInterval(nexPage,1500);

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





//��ȡԪ��

var tb=document.getElementById('tb');
//console.log(tb);
var lilist=tb.children;
//console.log(lilist);

var tb_c_none=document.getElementsByClassName('tb_c');
//console.log(tb_c_none);

for(var i=0;i<lilist.length;i++){
    lilist[i].setAttribute('index',i);
    lilist[i].onmouseover=function(){
        var index=this.getAttribute('index');
        for(var j=0;j<lilist.length;j++){
            if(lilist[j]==this){
                lilist[j].className='tb_active';
            }else{
                lilist[j].className='';
            }
        }

for(var j=0;j<tb_c_none.length;j++){
    if(j==index){
        tb_c_none[j].style.display='block'
    }else{
        tb_c_none[j].style.display='none';
    }
}

    }
}

//��ȡԪ��


var wrapper_in = document.getElementById("wrapper_in");//div�����
var ul2 = document.getElementById("slick_ul");//ul
var slick_prev = document.getElementById("slick_prev");//���ͷ
var slick= document.getElementById("slick-next");//�Ҽ�ͷ
console.log(slick);

var index = 0;
slick_prev.onclick = function () {
    if(index == 0){
        index = ul2.children.length - 3;
        ul2.style.left = -index * wrapper_in.offsetWidth + 'px';
    }
    index--;
    animationMove(ul2,-index*wrapper_in.offsetWidth)
}

slick.onclick = function () {
    if(index == ul2.children.length - 3){
        index = 0;
        ul2.style.left = '0px';
    }
    index++;
    animationMove(ul2,-index*wrapper_in.offsetWidth)

}




var wrapper = document.getElementById("wrapper_in_1");//div�����
var ul1 = document.getElementById("slick_ul_1");//ul
var slick_prev1 = document.getElementById("slick-prev_1");//���ͷ
var slick1= document.getElementById("slick-next_1");//�Ҽ�ͷ
console.log(slick);

var index1 = 0;
slick_prev1.onclick = function () {
    if(index1 == 0){
        index1 = ul1.children.length - 3;
        ul1.style.left = -index1 * wrapper.offsetWidth + 'px';
    }
    index1--;
    animationMove(ul1,-index1*wrapper.offsetWidth)
}

slick1.onclick = function () {
    if(index1 == ul1.children.length - 3){
        index1 = 0;
        ul1.style.left = '0px';
    }
    index1++;
    animationMove(ul1,-index1*wrapper.offsetWidth)

}
$(function () {
    $('.cc-video-cover').on('mouseenter',function () {
        var index = $(this).parent().parent().index();
        $(this).children('div').css('display','block');
    //    $('.cc-video-sub-list>ul>li').eq(index).siblings('li').children().children().children('div').css('display','none');
    })
    $('.cc-video-cover').on('mouseleave',function () {
        var index = $(this).parent().parent().index();
        $(this).children('div').css('display','none');
    //    $('.cc-video-sub-list>ul>li').eq(index).siblings('li').children().children().children('div').css('display','none');
    })
})



