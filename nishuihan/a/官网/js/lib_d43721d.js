"use strict";
var _$ = function (t) {
    return document.getElementById(t)
};
_$.getPara = function (t, e, n) {
    return "undefined" != typeof t && "undefined" != typeof t[e] ? t[e] : n
}, _$.scrollY = function (t, e, n) {
    function o() {
        s.scrollTop += l, s.scrollTop >= r && (s.scrollTop = 0)
    }

    var i = _$.getPara(n, "steper", 1), a = _$.getPara(n, "rate", 50), s = _$(t), c = _$(e);
    s.style.cssText = "overflow:hidden";
    var r = parseInt(c.offsetHeight);
    if (0 == r && (r = 800), !(2 * r < parseInt(s.offsetHeight))) {
        c.innerHTML += c.innerHTML;
        var l = i, p = setInterval(o, a);
        s.onmouseover = function () {
            clearInterval(p)
        }, s.onmouseout = function () {
            p = setInterval(o, a)
        }
    }
}, _$.showwin = function (t, e) {
    var n = _$.getPara(e, "bg", !0), o = _$.getPara(e, "html", !1), i = _$.getPara(e, "open", !1), a = _$.getPara(e, "close", !1), s = !-[1] && !window.XMLHttpRequest;
    o && !_$(t) && $("body").append(o);
    var c = $("#" + t);
    c.css({
        display: "none",
        "z-index": "10000",
        position: "fixed",
        left: "50%",
        "margin-left": -(c.width() / 2) + "px"
    }), s && c.css({position: "absolute"});
    var r = $(document).height(), l = ($(window).height() - c.height()) / 2, p = document.documentElement.scrollTop + document.body.scrollTop + ($(window).height() - c.height()) / 2;
    if (c.show("fast"), setTimeout(function () {
            c.css({top: l + "px"}), s && c.css({top: p + "px"}), i && i(t)
        }, 300), $("#" + t + " .btn_close").click(function () {
            c.fadeOut("fast"), n && $("#" + t + "_popwin_bg").hide(), a && a(t)
        }), n) {
        var d = {
            background: "#000",
            filter: "alpha(opacity=85)",
            "-moz-opacity": "0.85",
            "-khtml-opacity": "0.85",
            opacity: " 0.85",
            width: "100%",
            "z-index": "9999",
            position: "absolute",
            top: "0",
            left: "0",
            "min-width": "1200px"
        };
        document.getElementById(t + "_popwin_bg") ? $("#" + t + "_popwin_bg").css("height", r).css(d).show() : ($("body").append('<div id="' + t + '_popwin_bg"></div>'), $("#" + t + "_popwin_bg").css("height", r).css(d).show().click(function () {
            c.fadeOut("fast"), $(this).hide(), a && a(t)
        }))
    }
}, _$.scrollXC = function (t, e, n, o, i) {
    var a = (_$.getPara(i, "remove", !1), $("#" + t)), s = $("#" + e), c = $("#" + n);
    a.css("position", "absolute"), a.wrap("<div style='width:2000px;position:absolute'></div>");
    var r = (a.width(), 0);
    c.click(function () {
        r > -3120 && (r -= o, a.stop().animate({left: r + "px"}, "fast"))
    }), s.click(function () {
        0 > r && (r += o, a.stop().animate({left: r + "px"}, "fast", function () {
        }))
    })
}, _$.fadeSlide = function (t, e, n, o) {
    function i(e) {
        "prev" == e ? r-- : "next" == e ? r++ : r = e, r > l - 1 ? r = 0 : 0 > r && (r = l - 1), a.fadeOut("fast"), $(t + ":eq(" + r + ")").fadeIn("fast"), s && ($(s).removeClass("current"), $(s + ":eq(" + r + ")").addClass("current"))
    }

    var a = $(t), s = _$.getPara(o, "nav", !1), c = _$.getPara(o, "auto", !1), r = 0, l = a.length;
    s && $(s).bind("mouseover", function () {
        var t = $(s).index($(this));
        r != t && i(t), $(s).removeClass("current"), $(this).addClass("current")
    }), $(e).click(function () {
        i("prev")
    }), $(n).click(function () {
        i("next")
    }), i(0), c && setInterval(function () {
        i("next")
    }, 5e3)
};