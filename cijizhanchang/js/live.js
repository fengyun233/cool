$ ( function () {
    $ ( ".loginPop" ).show ()
    $ ( "#mask" ).show ()
    var timerID = setInterval ( function () {
        $ ( ".arrow-right2" ).click ()
    }, 2000 )
    $ ( ".close " ).on ( "click", function () {
        $ ( this ).parent ().hide ()
        $ ( "#mask" ).hide ()
    } )
    $ ( ".login_box a" ).on ( "click", function () {
        $ ( ".loginPop" ).show ()
        $ ( "#mask" ).show ()
    } )
    $ ( ".lottery-btn" ).on ( "click", function () {
        $ ( ".loginPop" ).show ()
        $ ( "#mask" ).show ()
    } )
    $ ( ".addressBtn" ).on ( "click", function () {
        $ ( ".loginPop" ).show ()
        $ ( "#mask" ).show ()
    } )
    $ ( ".recordBtn" ).on ( "click", function () {
        $ ( ".loginPop" ).show ()
        $ ( "#mask" ).show ()
    } )
    $ ( ".schedule" ).on ( "click", function () {
        $ ( ".schedulePop" ).show ()
        $ ( "#mask" ).show ()
    } )
    $ ( ".ruleBtn" ).on ( "click", function () {
        $ ( ".activeRulePop" ).show ()
        $ ( "#mask" ).show ()
    } )

    var index1 = 0
    $ ( ".arrow-left1 " ).on ( "click", function () {
        if ( index1 == 0 ) {
            index1 = 4
            $ ( "#zbInfo" ).css ( "left", - index1 * $ ( ".model1 .swiper-slide" ).width () )
        }
        index1 --
        platformTitle ( index1)
        hostInfo ( 0,index1 )
        $ ( "#zbInfo" ).stop ( true, false ).animate ( {
            "left" : - index1 * $ ( ".model1 .swiper-slide" ).width ()
        }, 300, "linear" )
    } )

    $ ( ".arrow-right1 " ).on ( "click", function () {
        if ( index1 == 4 ) {
            index1 = 0
            $ ( "#zbInfo" ).css ( "left", - index1 * $ ( ".model1 .swiper-slide" ).width () )
        }
        index1 ++
        platformTitle ( index1)
        hostInfo ( 0,index1 )
        $ ( "#zbInfo" ).stop ( true, false ).animate ( {
            "left" : - index1 * $ ( ".model1 .swiper-slide" ).width ()
        }, 300, "linear" )
    } )

    function platformTitle ( i ) {
        switch ( i ) {
            case 0, 4 :
                $ ( ".title1" ).css ( "background-position", "0px 0px" )
                break
            case 1:
                $ ( ".title1" ).css ( "background-position", "0px -336px" )
                break
            case 2:
                $ ( ".title1" ).css ( "background-position", "-885px -262px" )
                break
            case 3:
                $ ( ".title1" ).css ( "background-position", "-295px -336px" )
                break
        }
    }

    $('li.rank-item').on('mouseenter',function(){
        $(this).addClass('current').siblings('li').removeClass('current');
    });
    $('#rank_control3 li.rank-item').on('mouseenter',function(){
        $(this).addClass('current').siblings('li').removeClass('current').parent().parent().siblings('.col-body').find('li').removeClass('current')
    });

    $ ( "#zbInfo li" ).on ( "click", function () {
        $ ( this ).addClass ( "select" ).siblings ( "li" ).removeClass ( "select" ).parent ().parent ().siblings ().find ( "li" ).removeClass ( "select" )
        var k1=$ ( this ).index ()
        var k2=  $ ( this ).parent().parent().index()
        hostInfo ( k1,k2 )
    } )

    var index2 = 0
    $ ( ".arrow-left2" ).on ( "click", function () {
        if ( index2 == 0 ) {
            index2 = 6
            $ ( "#zbInfo2" ).css ( "left", - index2 * $ ( ".model2 .swiper-slide" ).width () )
        }
        index2 --
        $ ( "#zbInfo2" ).stop ( true, false ).animate ( {
            "left" : - index2 * $ ( ".model2 .swiper-slide" ).width ()
        }, 300, "linear" )
    } )

    $ ( ".arrow-right2" ).on ( "click", function () {
        if ( index2 == 6 ) {
            index2 = 0
            $ ( "#zbInfo2" ).css ( "left", - index2 * $ ( ".model2 .swiper-slide" ).width () )
        }
        index2 ++
        $ ( "#zbInfo2" ).stop ( true, false ).animate ( {
            "left" : - index2 * $ ( ".model2 .swiper-slide" ).width ()
        }, 300, "linear" )
    } )

    $ ( ".model2 .carousel" ).on ( "mouseenter", function () {
        clearInterval ( timerID )
    } )

    $ ( ".model2 .carousel" ).on ( "mouseleave", function () {
        timerID = setInterval ( function () {
            $ ( ".arrow-right2" ).click ()
        }, 2000 )
    } )

    function hostInfo ( k1,k2 ) {
        var data = [
            {k:0,name:"东北马大哈", pingtai:"企鹅电竞", zbIcon:"qedj",roomId:"254592251", time1 : "10：00-14：00",time2:"18：00-22：00", pic:"./image/31.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=254592251&gifttab=false&adtab=false"},
            {k:0,name:"不二先生", pingtai:"企鹅电竞",  zbIcon:"qedj",roomId:"140796111", time1 : "10：00-24：00",time2:"",pic:"./image/32.jpg", liveSrc:"http://egame.qq.com/share/live?anchorid=140796111&gifttab=false&adtab=false"},
            {k:0,name:"超燃姐弟", pingtai:"企鹅电竞", zbIcon:"qedj",roomId:"32069963", time1 : "19：00-23：00", time2:"",pic:"./image/33.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=32069963&gifttab=false&adtab=false"},
            {k:0,name:"Dae-Klaus", pingtai:"企鹅电竞", zbIcon:"qedj", roomId:"31975148", time1 : "14：00-22：00", time2:"",pic:"./image/34.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=31975148&gifttab=false&adtab=false"},
            {k:0,name:"TL丶狙山鸡", pingtai:"企鹅电竞", zbIcon:"qedj",roomId:"387757109", time1 : "14：00-23：00",time2:"",pic:"./image/35.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=387757109&gifttab=false&adtab=false"},

            {k:1,name:"冬季 ", pingtai:"虎牙直播",zbIcon:"hy",roomId:"2215084612", time1 : "12:00-17:00",time2:"19:00-23:00",pic:"./image/37.jpg",liveSrc:"http://liveshare.huya.com/dongji/huyacoop.swf"},
            {k:1,name:"Dae-亚洲苏神 ", pingtai:"虎牙直播",zbIcon:"hy",roomId:"16663484", time1 : "10:00-16:00",time2:"20:00-24:00",pic:"./image/38.jpg",liveSrc:"http://www.huya.com/sunshen"},
            {k:1,name:"杀不死 ", pingtai:"虎牙直播",zbIcon:"hy",roomId:"28335923", time1 : "16:00-24:00",time2:"",pic:"./image/39.jpg",liveSrc:"http://liveshare.huya.com/shabusi/huyacoop.swf"},
            {k:1,name:"青柠 ", pingtai:"虎牙直播",zbIcon:"hy",roomId:"1770743692", time1 : "7:00-14:00",time2:"",pic:"./image/40.jpg",liveSrc:"http://liveshare.huya.com/qn1314/huyacoop.swf"},

            {k:2,name:"8gk ", pingtai:"斗鱼直播",zbIcon:"dy",roomId:"243423", time1 : "8:00-16:00", time2:"",pic:"./image/42.jpg",liveSrc:"https://staticlive.douyucdn.cn/common/share/play.swf?room_id=243423"},
            {k:2,name:"渝万丶蜘蛛 ", pingtai:"斗鱼直播",zbIcon:"dy",roomId:"4334799", time1 : "18:00-02:00",time2:"",pic:"./image/43.jpg", liveSrc:"https://staticlive.douyucdn.cn/common/share/play.swf?room_id=4334799"},
            {k:2,name:"Dy花老湿 ", pingtai:"斗鱼直播",zbIcon:"dy",roomId:"952595", time1 : "9:30-16:30",time2:"",pic:"./image/44.jpg",liveSrc:"https://staticlive.douyucdn.cn/common/share/play.swf?room_id=952595"},
            {k:2,name:"肉丝叔叔 ", pingtai:"斗鱼直播",zbIcon:"dy",roomId:"2863486", time1 : "16:00-22:30",time2:"",pic:"./image/45.jpg",liveSrc:"https://staticlive.douyucdn.cn/common/share/play.swf?room_id=2863486"},

            {k:3,name:"毒丸子", pingtai:"熊猫直播",zbIcon:"xm",roomId:"807951", time1 : "19:00-24:00",time2:"",pic:"./image/46.jpg", liveSrc:"http://panda.tv/liveplay/807951"},
            {k:3,name:"strong丶霸狼 ", pingtai:"熊猫直播",zbIcon:"xm",roomId:"798156", time1 : "19:00-次日1:00",time2:"",pic:"./image/47.jpg",liveSrc:"http://panda.tv/liveplay/798156"},
            {k:3,name:"你喜欢花臂吗 ", pingtai:"熊猫直播",zbIcon:"xm",roomId:"1310184", time1 : "10:00-22:00",time2:"",pic:"./image/48.jpg",liveSrc:"http://panda.tv/liveplay/1310184"},
            {k:3,name:"阿黄AWONG ", pingtai:"熊猫直播",zbIcon:"xm",roomId:"312435", time1 : "19:00-次日1:00",time2:"",pic:"./image/49.jpg",liveSrc:"http://panda.tv/liveplay/312435"},

            {k:4,name:"东北马大哈", pingtai:"企鹅电竞", zbIcon:"qedj",roomId:"254592251", time1 : "10：00-14：00",time2:"18：00-22：00", pic:"./image/31.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=254592251&gifttab=false&adtab=false"},
            {k:4,name:"不二先生", pingtai:"企鹅电竞",  zbIcon:"qedj",roomId:"140796111", time1 : "10：00-24：00",time2:"",pic:"./image/32.jpg", liveSrc:"http://egame.qq.com/share/live?anchorid=140796111&gifttab=false&adtab=false"},
            {k:4,name:"超燃姐弟", pingtai:"企鹅电竞", zbIcon:"qedj",roomId:"32069963", time1 : "19：00-23：00", time2:"",pic:"./image/33.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=32069963&gifttab=false&adtab=false"},
            {k:4,name:"Dae-Klaus", pingtai:"企鹅电竞", zbIcon:"qedj", roomId:"31975148", time1 : "14：00-22：00", time2:"",pic:"./image/34.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=31975148&gifttab=false&adtab=false"},
            {k:4,name:"TL丶狙山鸡", pingtai:"企鹅电竞", zbIcon:"qedj",roomId:"387757109", time1 : "14：00-23：00",time2:"",pic:"./image/35.jpg",liveSrc:"http://egame.qq.com/share/live?anchorid=387757109&gifttab=false&adtab=false"}]

        var arr=[]
        for(var i = 0;i<data.length;i++){
            if( data[ i ][ "k" ]==k2 ){
                arr.push(data[ i ])
            }
        }
        for ( var j = 0 ; j < arr.length ; j ++ ) {
            if ( j == k1 ) {
                $ ( ".bigPhoto img" ).attr ( "src", arr[ j ].pic )
                $ ( "#zb_name" ).text ( arr[ j ].name )
                $ ( "#zb_platform" ).text ( arr[ j ].pingtai )
                $ ( "#zb_room" ).text ( arr[ j ].roomId )
                $ ( "#zb_time1" ).text ( arr[ j ].time1 )
                $ ( "#zb_time2" ).text ( arr[ j ].time2 )
                $ ( ".liveIntro .p1 i" ).attr ( "class", arr[ j ].zbIcon )
                $ ( ".liveIntro .pingtai" ).text ( arr[ j ].pingtai )
                $ ( ".liveIntro .name" ).text(arr[ j ].name)
                // $ ( "#live_doc iframe" ).attr ( "src", arr[ j ].liveSrc )
            }
        }
    }
} )