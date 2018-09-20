/**
 * Created by hp on 2018/7/26.
 */


/**1.平移动画
 *
 * @param obj  要移动的元素
 * @param target  要移动的目标距离
 */

function animat(element, target) {
    /*
    每一次移动之前都无条件的清除上一次定时器
    理由:
        当一个定时器没有到达边界,又开启另一个定时器时,上一个定时器的timeID会被覆盖
        但是上一个定时器没有停止,,当上一个定时器到达边界时,会清除定时器timeID,
        此时清除的timeID是新开启的定时器的id,所以就无法到达新开启的定时器的边界
     */
    clearInterval(element.timeID);

    /*  element.timeID
       1.全局变量只能存储一个定时器，无法实现多个元素同时移动
       2.每一个元素在移动的时候，将定时器作为自己的属性
     * 类似于运动员在跑步的时候，每一个运动员的身上都有一个标签记录定时器，
     谁到达终点，回收谁的定时器
     */

    element.timeID = setInterval(function () {
        //获取当前位置
        var current = element.offsetLeft;
        //设置每一段时间移动的位移
        var stept = 10;
        //从左往右还是从右往左  stept的正负值
        //如果目标位置大于当前位置,就是从左往右移动
        //如果目标位置小于当前位置,就是从右往左移动
        stept = target > current ? stept : -stept;
        //边界检测
        //如果 当前位置与目标位置的距离大于stept,就移动改变盒子的位移=当前位置+stept
        //否则(当前位置与目标位置的距离小于stept)就清除定时器,盒子left直接为目标位置
        if (Math.abs(current-target) > Math.abs(stept)) {
            current += stept;
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeID);
            element.style.left = target + "px";
        }

    }, 40);
}




/**
 * 2.获取元素任意css样式属性值
 * @param element  要获取属性值的元素
 * @param attr  要获取属性值的属性名
 */

function getStyle ( element,attr) {
    if(element.currentStyle){//IE8浏览器
        return element.currentStyle[attr];
    }else{//非IE8浏览器
        return window.getComputedStyle(element,null)[attr];
    }
}



/**
 * 3.缓动动画
 * @param element  要动画的元素
 * @param json  要改变的属性对象
 * @param fn 回调函数函数
 */

//改变元素任意多个属性的属性值的缓动动画封装函数
//获取任意多个属性及对应的属性值----键值对---用对象{"width":400,"height":200,"left":20};

/* 1.层级zIndex:层级是无法实现动画的，是一个瞬间的过程
 * 2.透明度opacity：取值范围 0-1之间的小数，在动画的时候应该有自己的逻辑
 * 思路：在计算的时候，放大一百倍。 赋值的时候缩小一百倍*/
//opacity透明度  0~1之间, 将当前位置和目标位置放大100倍,


function animation(element, json,fn) {
    //清除上次定时器
    clearInterval(element.timeID);
    //开启本次动画定时器
    element.timeID = setInterval(function () {
        /*开关思想
         1.每一次移动之前，假设本次移动所有的属性都到达终点  flag = true
         2.验证假设是否成立：只要有任何属性没有到达终点，假设被推翻  flag= false
         */
        //假设全部属性都到达终点
        var flag = true;
        //遍历json中的属性值
        for (var attr in json) {
            //层级是瞬间变化的,无需动画
            if (attr == "zIndex") {
                element.style[attr] = json[attr];
            } else if (attr == "opacity") {
                //当attr为opacity时,逻辑基本一样,
                // 透明度是小数无法取整，放大一百倍
                //获取当前属性的位置
                //注意点：getComputedStyle获取属性返回的是字符串，需要转成number类型
                //透明度是小数，不能使用parseInt,应该使用parseFloat
                var current = parseFloat(getStyle(element, attr) * 100);
                //获取当前属性的目标值
                var target = json[attr] * 100;
                //计算本次移动的距离
                var stept = (target - current) / 10;
                //判断stept正负值
                stept = stept > 0 ? Math.ceil(stept) : Math.floor(stept);
                //移动
                current += stept;
                element.style[attr] = current / 100;

                //如果当前属性没有到达终点,将flag修改为false

                if (current != target) {
                    flag = false;
                }
            } else {
                //获取当前属性的位置
                var current = parseInt(getStyle(element, attr));
                //获取当前属性的目标值
                var target = json[attr];
                //计算本次移动的距离
                var stept = (target - current) / 10;
                //判断stept正负值
                stept = stept > 0 ? Math.ceil(stept) : Math.floor(stept);
                //移动
                current += stept;
                element.style[attr] = current + "px";

                //如果当前属性没有到达终点,将flag修改为false
                if (current != target) {
                    flag = false;
                }
            }
        }

        //如果flag为true,说明全部属性已经全部到达终点,就清除定时器
        if (flag) {
            clearInterval(element.timeID);
            //动画结束后,执行一段代码
            //判断调用者是否传了一段函数代码(判断传入的参数类型是不是函数),
            // 如果传了就执行,没传就不执行
            if(typeof fn=="function"){
                fn();
            }
        }

    }, 200);

}



