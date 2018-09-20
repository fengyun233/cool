
  //左边呼吸轮播
$(function () {
  var index = 0;//定义一个变量记录索引
  $(".arrow-right").on("click", function () {
    index++;
    if (index == 3) {
      //一轮点击过后,index变成了3,没有对应下标的li了,此时应该显示第0张
      index = 0;
    }
    $(".slider li").eq(index).fadeIn(150).siblings("li").fadeOut(150);
  });
  $(".arrow-left").on("click", function () {
    index--;
    console.log(index);
    if (index < 0) {
      //因为eq(index)的特殊属性,-index从集合中的最后一个元素开始倒数,
      // 但是一轮过后,-index为-2(即li的length)后,-index为-3时找不到对应下标的li了
      index = 2;
    }
    $(".slider li").eq(index).fadeIn(150).siblings("li").fadeOut(150);
  })
});
//右边表单交互
$(function () {
  $(".error").hide();
  $("textarea#msg").on("focus", function () {
    if ($("#msg").val() == "Message") {
      $("#msg").text("");
    }
  });
  $("textarea#msg").on("blur", function () {
    if ($("#msg").val() == "") {
      $("#msg").text("Message");
    }
  });
  //button点击事件
  $(".button").on("click", function () {
    $(".error").hide();
    if ($("input#name").val() == "Name" || $("input#name").val() == "") {
      $("span#name_error").show();
      $("input#name").focus();
      return false;
    }
    if ($("input#email").val() == "Email" || $("input#email").val() == "") {
      $("span#email_error").show();
      $("input#email").focus();
      return false;
    }
    var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailReg.test($("#email").val())) {
      $("span#email_error2").show();
      $("input#email").focus();
      return false;
    }
    if ($("input#subject").val() == "Subject" || $("input#subject").val() == "") {
      $("span#subject_error").show();
      $("input#subject").focus();
      return false;
    }
    if ($("textarea#msg").val() == "Message" || $("textarea#msg").val() == "") {
      $("span#msg_error").show();
      $("textarea#msg").focus();
      return false;
    }
    $("#formAdd").show();
    $("#mask").show();
    return false;
  });
  $("#finish").on("click",function () {
    $("#formAdd").hide();
    $("#mask").hide();
  })


})
