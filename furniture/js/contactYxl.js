
  //��ߺ����ֲ�
$(function () {
  var index = 0;//����һ��������¼����
  $(".arrow-right").on("click", function () {
    index++;
    if (index == 3) {
      //һ�ֵ������,index�����3,û�ж�Ӧ�±��li��,��ʱӦ����ʾ��0��
      index = 0;
    }
    $(".slider li").eq(index).fadeIn(150).siblings("li").fadeOut(150);
  });
  $(".arrow-left").on("click", function () {
    index--;
    console.log(index);
    if (index < 0) {
      //��Ϊeq(index)����������,-index�Ӽ����е����һ��Ԫ�ؿ�ʼ����,
      // ����һ�ֹ���,-indexΪ-2(��li��length)��,-indexΪ-3ʱ�Ҳ�����Ӧ�±��li��
      index = 2;
    }
    $(".slider li").eq(index).fadeIn(150).siblings("li").fadeOut(150);
  })
});
//�ұ߱�����
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
  //button����¼�
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
