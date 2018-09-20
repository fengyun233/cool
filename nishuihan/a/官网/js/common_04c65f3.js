"use strict";
nie.define("common", function () {
    function t(t, e) {
        nie.config.stats.url.add(location.host + location.pathname + t, e)
    }

    $(".wrap").delegate("[stat]", "click", function () {
        var e = $(this).attr("stat"), i = $(this).attr("statname");
        t(e, i)
    });
    var e = function () {
        var t = nie.require("nie.util.shareV5"), e = $("#share_pic").attr("src"), i = $("#share_title").html(), n = $("#share_desc").html();
        t({fat: "#Mshare", type: 2, title: i, img: e, content: n})
    }, i = function () {
        e()
    };
    return {init: i}
});