/**
 * Created by hp on 2018/8/9.
 */

//当向上卷曲的距离大于254px时,position改为fixed
    window.onload= function () {
        var navBar=document.getElementById('nav');
        window.onscroll= function () {
            if(getScroll().scrollTop>='254'){
                navBar.className="xn_navBar fix";
                navBar.style.marginTop='0';
            }else{
                navBar.className="xn_navBar";
                navBar.removeAttribute('style');
            }
        }


        function getScroll() {
            return {
                scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            }
        }
    }
