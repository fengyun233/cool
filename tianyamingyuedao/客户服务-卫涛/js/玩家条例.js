/**
 * Created by Administrator on 2018/8/12.
 */

//导航栏的开始
var small = document.getElementById('small');
var big = document.getElementById('big');
small.onmouseover = function () {
        big.style.display = 'block';
    }
big.onmouseout = function () {
    big.style.display = 'none';
}

var total_r = document.getElementById('total_r');
var pop = document.getElementById('pop');
console.log(total_r);
console.log(pop);

total_r.onmouseenter = function () {
    pop.style.display = 'block';
}

total_r.onmouseleave = function () {
    pop.style.display = 'none';
}

pop.onmouseenter= function () {
    pop.style.display = 'block';
}

pop.onmouseleave= function () {
    pop.style.display = 'none';
}


//导航栏的结束

//页面主体的开始
var load = document.getElementById('load');
load.onmouseenter = function () {
    load.style.opacity = 0.1;
    //load.style.backgroundImage = "url('../images/hover.png')";
}

load.onmouseleave = function () {
    load.style.opacity = 0;
}

var wei = document.getElementById('wei');
var liList = wei.getElementsByTagName('li');
for(var i = 0;i<liList.length;i++){
    liList[i].onmouseenter = function () {
        this.style.opacity = 0.7;
    }

    liList[i].onmouseleave = function () {
        this.style.opacity = 1;
    }
}
