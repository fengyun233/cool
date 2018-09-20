/**
 * Created by hp on 2018/7/26.
 */


/**1.ƽ�ƶ���
 *
 * @param obj  Ҫ�ƶ���Ԫ��
 * @param target  Ҫ�ƶ���Ŀ�����
 */

function animat(element, target) {
    /*
    ÿһ���ƶ�֮ǰ���������������һ�ζ�ʱ��
    ����:
        ��һ����ʱ��û�е���߽�,�ֿ�����һ����ʱ��ʱ,��һ����ʱ����timeID�ᱻ����
        ������һ����ʱ��û��ֹͣ,,����һ����ʱ������߽�ʱ,�������ʱ��timeID,
        ��ʱ�����timeID���¿����Ķ�ʱ����id,���Ծ��޷������¿����Ķ�ʱ���ı߽�
     */
    clearInterval(element.timeID);

    /*  element.timeID
       1.ȫ�ֱ���ֻ�ܴ洢һ����ʱ�����޷�ʵ�ֶ��Ԫ��ͬʱ�ƶ�
       2.ÿһ��Ԫ�����ƶ���ʱ�򣬽���ʱ����Ϊ�Լ�������
     * �������˶�Ա���ܲ���ʱ��ÿһ���˶�Ա�����϶���һ����ǩ��¼��ʱ����
     ˭�����յ㣬����˭�Ķ�ʱ��
     */

    element.timeID = setInterval(function () {
        //��ȡ��ǰλ��
        var current = element.offsetLeft;
        //����ÿһ��ʱ���ƶ���λ��
        var stept = 10;
        //�������һ��Ǵ�������  stept������ֵ
        //���Ŀ��λ�ô��ڵ�ǰλ��,���Ǵ��������ƶ�
        //���Ŀ��λ��С�ڵ�ǰλ��,���Ǵ��������ƶ�
        stept = target > current ? stept : -stept;
        //�߽���
        //��� ��ǰλ����Ŀ��λ�õľ������stept,���ƶ��ı���ӵ�λ��=��ǰλ��+stept
        //����(��ǰλ����Ŀ��λ�õľ���С��stept)�������ʱ��,����leftֱ��ΪĿ��λ��
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
 * 2.��ȡԪ������css��ʽ����ֵ
 * @param element  Ҫ��ȡ����ֵ��Ԫ��
 * @param attr  Ҫ��ȡ����ֵ��������
 */

function getStyle ( element,attr) {
    if(element.currentStyle){//IE8�����
        return element.currentStyle[attr];
    }else{//��IE8�����
        return window.getComputedStyle(element,null)[attr];
    }
}



/**
 * 3.��������
 * @param element  Ҫ������Ԫ��
 * @param json  Ҫ�ı�����Զ���
 * @param fn �ص���������
 */

//�ı�Ԫ�����������Ե�����ֵ�Ļ���������װ����
//��ȡ���������Լ���Ӧ������ֵ----��ֵ��---�ö���{"width":400,"height":200,"left":20};

/* 1.�㼶zIndex:�㼶���޷�ʵ�ֶ����ģ���һ��˲��Ĺ���
 * 2.͸����opacity��ȡֵ��Χ 0-1֮���С�����ڶ�����ʱ��Ӧ�����Լ����߼�
 * ˼·���ڼ����ʱ�򣬷Ŵ�һ�ٱ��� ��ֵ��ʱ����Сһ�ٱ�*/
//opacity͸����  0~1֮��, ����ǰλ�ú�Ŀ��λ�÷Ŵ�100��,


function animation(element, json,fn) {
    //����ϴζ�ʱ��
    clearInterval(element.timeID);
    //�������ζ�����ʱ��
    element.timeID = setInterval(function () {
        /*����˼��
         1.ÿһ���ƶ�֮ǰ�����豾���ƶ����е����Զ������յ�  flag = true
         2.��֤�����Ƿ������ֻҪ���κ�����û�е����յ㣬���豻�Ʒ�  flag= false
         */
        //����ȫ�����Զ������յ�
        var flag = true;
        //����json�е�����ֵ
        for (var attr in json) {
            //�㼶��˲��仯��,���趯��
            if (attr == "zIndex") {
                element.style[attr] = json[attr];
            } else if (attr == "opacity") {
                //��attrΪopacityʱ,�߼�����һ��,
                // ͸������С���޷�ȡ�����Ŵ�һ�ٱ�
                //��ȡ��ǰ���Ե�λ��
                //ע��㣺getComputedStyle��ȡ���Է��ص����ַ�������Ҫת��number����
                //͸������С��������ʹ��parseInt,Ӧ��ʹ��parseFloat
                var current = parseFloat(getStyle(element, attr) * 100);
                //��ȡ��ǰ���Ե�Ŀ��ֵ
                var target = json[attr] * 100;
                //���㱾���ƶ��ľ���
                var stept = (target - current) / 10;
                //�ж�stept����ֵ
                stept = stept > 0 ? Math.ceil(stept) : Math.floor(stept);
                //�ƶ�
                current += stept;
                element.style[attr] = current / 100;

                //�����ǰ����û�е����յ�,��flag�޸�Ϊfalse

                if (current != target) {
                    flag = false;
                }
            } else {
                //��ȡ��ǰ���Ե�λ��
                var current = parseInt(getStyle(element, attr));
                //��ȡ��ǰ���Ե�Ŀ��ֵ
                var target = json[attr];
                //���㱾���ƶ��ľ���
                var stept = (target - current) / 10;
                //�ж�stept����ֵ
                stept = stept > 0 ? Math.ceil(stept) : Math.floor(stept);
                //�ƶ�
                current += stept;
                element.style[attr] = current + "px";

                //�����ǰ����û�е����յ�,��flag�޸�Ϊfalse
                if (current != target) {
                    flag = false;
                }
            }
        }

        //���flagΪtrue,˵��ȫ�������Ѿ�ȫ�������յ�,�������ʱ��
        if (flag) {
            clearInterval(element.timeID);
            //����������,ִ��һ�δ���
            //�жϵ������Ƿ���һ�κ�������(�жϴ���Ĳ��������ǲ��Ǻ���),
            // ������˾�ִ��,û���Ͳ�ִ��
            if(typeof fn=="function"){
                fn();
            }
        }

    }, 200);

}



