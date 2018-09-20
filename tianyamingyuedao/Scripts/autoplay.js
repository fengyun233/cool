/*
** Create by pc on 2018/8/9
*/
var auto=document.getElementsByClassName('auto')[0];//轮播盒子
var cir=document.getElementsByClassName('cir')[0];//轮播小圈圈
var ul=auto.children[0];//ul
var liList=ul.children;//ul中的li
var spanList=cir.children;//轮播小圈圈数组
var index=0;
var timeID=null;

//自动轮播
timeID = setInterval(function (  ) {
    nextPage();
},1000);

// 鼠标移入
auto.onmousemove=function(){
    clearInterval(timeID);
}
//鼠标移出
auto.onmouseout=function(){
    timeID=setInterval(function(){
        nextPage();
    },2000);
}

//页码添加点击事件
for(var i=0;i<spanList.length;i++){
    spanList[i].setAttribute('yemaindex',i);
    spanList[i].onmouseenter=function(){
        var yema=this.getAttribute('yemaindex');
        animationMove(ul,-yema*auto.offsetWidth);
        for(var j=0;j<spanList.length;j++){
            //排他思想设置样式
            if( spanList[j]==this){
                this.className='current';
            }else{
                spanList[j].className='';
            }
        }
    }
}

//下一页函数封装
function nextPage(){
    //1.如果是最后一项，直接跳到第一页，设置左距为0px
    if(index == liList.length-1){
        ul.style.left='0px';
        index=0;
    }
    //2.index++
    index++;
    //3.实现轮播
    // ul.style.left = -index*screen.offsetWidth+'px';
    animationMove(ul,-index*auto.offsetWidth);
    //4.图片与页码对应，页码的样式改变
    for(var i=0;i<spanList.length;i++){
        if(index==i){
            spanList[i].className='current';
        }else{
            spanList[i].className='';
        }
    }
    //5.当图片是最后一张时，第一个页码的样式改为current
    if(index==liList.length-1){
        spanList[0].className='current';
    }
}

//头部的函数
// window.onload = function () {
//     function getId(ele) {//获取id元素函数
//         return document.getElementById(ele)
//     }

//     var tengxunplate = getId("tengxunplate")
//     var NBA = getId("NBA")
//     var nba = getId("nba")
//     var nba2k = getId("nba2k")
//     nba.onmouseenter = function () {
//         nba2k.style.display = "block"
//         tengxunplate.style.display = "none"
//     }
//     nba2k.onmouseleave = function () {
//         nba2k.style.display = "none"
//         tengxunplate.style.display = "block"
//     }
// }
