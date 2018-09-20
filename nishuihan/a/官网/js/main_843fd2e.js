"use strict";
nie.define("job", function () {
    var i = {
        btn: "https://n.res.netease.com/pc/gw/20180619161414/img/gif/btn2_d4f4ceb.png",
        xh: "https://n.res.netease.com/pc/gw/20180619161414/img/job/xh_638de68.png",
        jl: "https://n.res.netease.com/pc/gw/20180619161414/img/job/jl_ce7898d.png",
        sm: "https://n.res.netease.com/pc/gw/20180619161414/img/job/sm_ad02e98.png",
        sx: "https://n.res.netease.com/pc/gw/20180619161414/img/job/sx_eefb1b2.png",
        ty: "https://n.res.netease.com/pc/gw/20180619161414/img/job/ty_0594702.png"
    }, e = !1, a = 1, t = null, n = function () {
        function i(i) {
            var e = i.mp4, a = i.hdmp4, t = i.shdmp4, o = i.width || 1200, s = i.height || 680, d = ($(window).height() - s) / 2;
            $(['<div class="pop_video_bg" style="height:' + $("body").height() + 'px;"></div>', '<div class="pop_video" style="margin-left:-' + o / 2 + "px;width:" + o + "px;height:" + s + "px;top:" + d + 'px;">', '<div id="pop_vv"></div>', '<a class="close_pv" href="javascript:void(0)" class="btn_close">x</a>', "</div>"].join("")).appendTo($("body")), $(".pop_video").show("fast", function () {
                $(this).css("overflow", "visible")
            }), n({
                fat: "#pop_vv",
                width: o,
                height: s,
                wmode: "window",
                movieUrl: e,
                HDmovieUrl: a,
                SHDmovieUrl: t,
                autoPlay: !0
            })
        }

        $(".job-nav a").click(function () {
            if (!$(this).hasClass("active")) {
                var i = $(".job-nav a.active").attr("name"), t = $(this).attr("name");
                e || $("#job-wrap").addClass("loading"), $(".job-nav a.active").removeClass("active"), $(this).addClass("active"), $(".job-bg").hide(), $(".job-bg[name=" + i + "]").show().addClass("leave"), $(".job-bg[name=" + t + "]").show().addClass("enter"), setTimeout(function () {
                    $(".job-bg[name=" + i + "]").hide().removeClass("leave enter")
                }, 500), a = $(this).index()
            }
        });
        var t = !1, n = nie.require("nie.util.videoV2");
        $("#jobs .video").on("click", function (e) {
            e.preventDefault();
            var a = $(this).attr("data-mp4"), n = $(this).attr("data-hmp4"), o = $(this).attr("data-smp4"), s = $(this).attr("data-size"), d = s && s.split(",") || [], c = d[0] || 1200, l = d[1] || 680;
            i({
                mp4: a,
                hdmp4: n,
                shdmp4: o,
                width: c,
                height: l
            }), $("#btn-audio").hasClass("off") || ($("#audio")[0].pause(), $("#btn-audio").addClass("off"), t = !0)
        }), $("body").delegate(".close_pv,.pop_video_bg", "click", function () {
            var i = $(".pop_video_bg, .pop_video");
            i.fadeIn(function () {
                i.remove(), t && $("#btn-audio").hasClass("off") && ($("#audio")[0].play(), $("#btn-audio").removeClass("off"), t = !1)
            })
        })
    }, o = function () {
        t && clearInterval(t), t = setInterval(function () {
            a += 1, 6 == a && (a = 0), $(".job-nav a").eq(a).click()
        }, 3e3)
    }, s = function () {
        function a(a, t) {
            var n = function (i) {
                var e = document.createElement("img");
                e.src = a[i], e.onload = function () {
                    $(".job-bg[name=" + i + "]").css("background", "url(" + a[i] + ")").addClass(i)
                }, $(".lazyload").append(e)
            };
            for (var o in i)n(o);
            e = !0, t && t()
        }

        $("body").append($("<div class='lazyload hide'></div>")), a(i, function () {
            o(), $("#job-wrap").hover(function () {
                t && clearInterval(t)
            }, function () {
                o()
            })
        })
    }, d = function () {
        n()
    };
    return {init: d, lazyload: s}
}), nie.define("Banner", function () {
    var i = function (i) {
        function e() {
            t.hover(function () {
                s && clearInterval(s), a($(this))
            }, function () {
                d && (s = setInterval(function () {
                    console.log(n), n += 1, n == o && (n = 0), t.eq(n).click()
                }, d))
            }), t.click(function (i) {
                a($(this)), i.stopPropagation()
            })
        }

        function a(i) {
            var e = i;
            if (e.hasClass("active"))return !1;
            var a = e.index(), t = n;
            n = a, 2 != t && 1 != t || !$(".ds-tabs>div").eq(t).hasClass("open") ? ($(".ds-tabs>div").fadeOut().eq(a).fadeIn(), $("#dashi .switch i.active").removeClass("active"), e.addClass("active"), (2 == a || 1 == a) && setTimeout(function () {
                $(".ds-tabs>div").eq(a).addClass("open");
                var i = $(".ds-tabs>div").eq(a).find(".video").attr("data-mp4");
                setTimeout(function () {
                    $(".ds-tabs>div").eq(a).find(".zhezhao").show(), $(".ds-tabs>div").eq(a).find(".video").append($('<video autoplay muted loop src="' + i + '"></video>'))
                }, 500)
            }, 50)) : ($(".ds-tabs>div").eq(t).find(".video").empty(), $(".ds-tabs>div").eq(t).find(".zhezhao").hide(), $(".ds-tabs>div").eq(t).removeClass("open"), setTimeout(function () {
                $(".ds-tabs>div").fadeOut().eq(a).fadeIn(), $("#dashi .switch i.active").removeClass("active"), e.addClass("active"), (2 == a || 1 == a) && setTimeout(function () {
                    $(".ds-tabs>div").eq(a).addClass("open");
                    var i = $(".ds-tabs>div").eq(a).find(".video").attr("data-mp4");
                    setTimeout(function () {
                        $(".ds-tabs>div").eq(a).find(".zhezhao").show(), $(".ds-tabs>div").eq(a).find(".video").append($('<video autoplay muted loop src="' + i + '"></video>'))
                    }, 500)
                }, 50)
            }, 600))
        }

        var t = i.nav || $(".block2 .maidian_nav a"), n = (i.list || $(".block2 .maidian_list li"), 0), o = t.length, s = null, d = i.timer || !1;
        d && (s = setInterval(function () {
            n += 1, n == o && (n = 0), t.eq(n).click()
        }, d)), e()
    };
    return i.create = function (e) {
        return new i(e)
    }, i
}), nie.define("dashi", function () {
    var i = nie.require("Banner"), e = function () {
        function e(i) {
            var e = i.mp4, a = i.hdmp4, n = i.shdmp4, o = i.width || 850, s = i.height || 480, d = ($(window).height() - s) / 2;
            $(['<div class="pop_video_bg" style="height:' + $("body").height() + 'px;"></div>', '<div class="pop_video" style="margin-left:-' + o / 2 + "px;width:" + o + "px;height:" + s + "px;top:" + d + 'px;">', '<div id="pop_vv"></div>', '<a class="close_pv" href="javascript:void(0)" class="btn_close">x</a>', "</div>"].join("")).appendTo($("body")), $(".pop_video").show("fast", function () {
                $(this).css("overflow", "visible")
            }), t({
                fat: "#pop_vv",
                width: o,
                height: s,
                wmode: "window",
                movieUrl: e,
                HDmovieUrl: a,
                SHDmovieUrl: n,
                autoPlay: !0
            })
        }

        i.create({
            nav: $("#dashi .switch i"),
            list: $(".ds-tabs>div"),
            timer: 4e3
        }), $("#dashi .zhezhao").on("click", function () {
            $(this).siblings(".play").click()
        });
        var a = !1, t = nie.require("nie.util.videoV2");
        $("#dashi .play").on("click", function (i) {
            i.preventDefault();
            var t = $(this).attr("data-mp4"), n = $(this).attr("data-hmp4"), o = $(this).attr("data-smp4"), s = $(this).attr("data-size"), d = s && s.split(",") || [], c = d[0] || 1200, l = d[1] || 680;
            e({
                mp4: t,
                hdmp4: n,
                shdmp4: o,
                width: c,
                height: l
            }), $("#btn-audio").hasClass("off") || ($("#audio")[0].pause(), $("#btn-audio").addClass("off"), a = !0)
        }), $("body").delegate(".close_pv,.pop_video_bg", "click", function () {
            var i = $(".pop_video_bg, .pop_video");
            i.fadeIn(function () {
                i.remove(), a && $("#btn-audio").hasClass("off") && ($("#audio")[0].play(), $("#btn-audio").removeClass("off"), a = !1)
            })
        })
    };
    return {init: e}
}), $(function () {
    nie.config.copyRight.setNormal()
});
var job = void 0;
nie.define("main", function () {
    var i = nie.require("common");
    i.init(), job = nie.require("job"), job.init();
    var e = {
        ADinit: function () {
            function i(i) {
                var e = $(i).find(".switch-pic a"), a = $(i).find(".switch-ctrl"), t = null, n = 3e3, o = {
                    bannerPlay: function () {
                        function i() {
                            o - 1 > s ? s++ : s = 0, e.hide(), e.eq(s).show().animate({
                                opacity: "1",
                                filter: "alpha(opacity=100)",
                                "z-index": "100"
                            }, 500).siblings().animate({
                                opacity: "0",
                                filter: "alpha(opacity=0)",
                                "z-index": "99"
                            }, 500), t.eq(s).addClass("current").siblings().removeClass("current")
                        }

                        var a, o = e.length, s = 0;
                        e.hide(), e.stop().eq(s).show().css({
                            opacity: "1",
                            filter: "alpha(opacity=100)"
                        }), t.eq(s).addClass("current"), t.hover(function () {
                            clearInterval(a);
                            var i = $(this).index();
                            s = i, e.stop().hide(), e.eq(i).stop().show().animate({
                                opacity: "1",
                                filter: "alpha(opacity=100)",
                                "z-index": "100"
                            }, 300).siblings().animate({
                                opacity: "0",
                                filter: "alpha(opacity=0)",
                                "z-index": "99"
                            }, 300), t.eq(i).addClass("current").siblings().removeClass("current")
                        }, function () {
                            a = setInterval(i, n)
                        }), e.hover(function () {
                            clearInterval(a)
                        }, function () {
                            a = setInterval(i, n)
                        }), a = setInterval(i, n)
                    }, _fixBanner: function () {
                        e.each(function () {
                            a.append("<span></span>")
                        }), t = a.find("span")
                    }, init: function () {
                        this._fixBanner(), this.bannerPlay(), t.length <= 1 && t.hide()
                    }
                };
                o.init()
            }

            ADBase.config({
                pos: "nishuihan-changgui-750761,nishuihan-changgui-817361", callback: function (e, a) {
                    if (0 == e)return !1;
                    for (var t = a["nishuihan-changgui-750761"], n = a["nishuihan-changgui-817361"], o = "", s = "", d = 0; d < t.length; d++) {
                        var c = 10 - d, l = t[d];
                        o += '<a href="' + l.url + '" style="z-index:' + c + '" target="_blank" title="' + l.title + '"><img width="555" height="270" src="' + l.src + '" /></a>'
                    }
                    for (var d = 0; d < n.length; d++) {
                        var c = 10 - d, l = n[d];
                        s += '<a href="' + l.url + '" style="z-index:' + c + '" target="_blank" title="' + l.title + '"><img width="555" height="270" src="' + l.src + '" /></a>'
                    }
                    $(".gf .switch-pic").html(o), $(".hz .switch-pic").html(s), i(".gf"), i(".hz")
                }
            }), $(".banner .switch a").on("click", function () {
                if (!$(this).hasClass("active")) {
                    var i = $(this).index();
                    $(".banner .Btnblock").hide(), $(".banner .Btnblock").eq(i).show(), $(".banner .switch a.active").removeClass("active"), $(this).addClass("active")
                }
            })
        }, News: function () {
            if ("undefined" != typeof getGlobalNews) {
                var i = getGlobalNews();
                if (i && i.NewsUrl) {
                    var e = $(".news-box .news").eq(0), a = '<li class="news-special"><span class="icon32">\u63a8\u8350</span><a href="' + i.NewsUrl + '" target="_blank">\u7f51\u6613CEO\u4e01\u78ca\uff1a<b>' + i.ShortTitle + "</b></a></li>";
                    e.prepend(a), e.find("li:last").remove()
                }
            }
            $(".news-tab li").on("mouseover", function () {
                var i = $(this).index() + 1;
                $(".news-tab li a").removeClass("active"), $(this).find("a").addClass("active"), $(".news").removeClass("active"), $($(".news")[i]).addClass("active"), $(".news-box .more").attr("href", $(this).find("a").attr("data-href"))
            })
        }, DomEvent: function () {
            function i() {
                var i = $("#hdpop_url").html(), e = $("#hdpop_img").attr("data-src"), a = $("#hdpop_desc").html(), t = '<div id="dhpop_video" style="display:block;width:1022px;height:496px;"><a href="' + i + '" target="_blank" class="hdpop_link" style="width:1022px;height:496px;background-image:url(' + e + ')">' + a + '</a><a id="close_dhpop" href="javascript:void(0)" class="btn_close">x</a></div>';
                "" != i && "" != e && _$.showwin("dhpop_video", {html: t})
            }

            $("#btn-audio").on("click", function () {
                $(this).hasClass("off") ? ($("#audio")[0].play(), $(this).removeClass("off")) : ($("#audio")[0].pause(), $(this).addClass("off"))
            }), $(".btn-libao").on("click", function () {
            }), $("#pop .pop-close").on("click", function () {
                $(".mask").hide(), $("#pop").hide()
            }), $(".bz").hover(function () {
                $(this).find(".mask").stop().fadeIn()
            }, function () {
                $(this).find(".mask").stop().fadeOut()
            }), $(".video").hover(function () {
                $(this).find(".mask").stop().fadeIn()
            }, function () {
                $(this).find(".mask").stop().fadeOut()
            }), "yes" == $("#hdpop_switch").html() && 1 != $.cookie("index_hlpop") && ($.cookie("index_hlpop", "1", {expires: 1}), i())
        }, ScrollFn: function () {
            var i = !1;
            $(window).scroll(function () {
                if (!i) {
                    var e = $(window).height();
                    $(".cd-animate").offset().top < e + $(window).scrollTop() - 200 && ($(".cd-animate").addClass("show"), i = !0, setTimeout(function () {
                        $("#codes .code").fadeIn(), $("#codes .icon").fadeOut(), $(".cd-animate").fadeOut(), $(".caidan").fadeIn()
                    }, 1800))
                }
            })
        }, init: function () {
            this.ADinit(), this.News(), this.DomEvent(), this.ScrollFn()
        }
    };
    e.init();
    var a = nie.require("dashi");
    a.init()
}), window.onload = function () {
    job.lazyload()
};