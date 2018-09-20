"use strict";
var video;
nie.define("common", function () {
    var e = function () {
        var e = nie.require("nie.util.shareV5"), i = $("#share_pic").attr("src"), t = $("#share_title").html(), n = $("#share_desc").html();
        e({fat: "#share", type: 1, title: t, img: i, content: n})
    }, i = function () {
        var e = nie.require("nie.util.videoV2");
        video = e({
            fat: "#video",
            width: "1200",
            height: "680",
            movieUrl: "https://nie.v.netease.com/r/video/20180611/9b817c0c-eeaa-4a33-bcf7-363ae62fe333.mp4",
            HDmovieUrl: "https://nie.v.netease.com/r/video/20180611/ab975ec6-5d40-45d9-ba5e-c3c8fbcfe13a.mp4",
            SHDmovieUrl: "https://nie.v.netease.com/r/video/20180611/c9e4a6b5-de55-4fe7-bafd-42984b7bfee1.mp4",
            vtype: ""
        })
    }, t = function () {
        e(), i()
    };
    return {init: t}
});