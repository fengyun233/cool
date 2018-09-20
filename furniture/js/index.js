/**
 * Created by yun on 2018/8/11.
 */
//��ں���
$(function () {
  //���е�ͼƬ��ʽ
  var $imgAttrs = [
    {
      x: 1,
      bgImg: 'url("images/content/slide1.jpg")'
    },
    {
      x: 2,
      bgImg: 'url("images/content/slide2.jpg")'
    },
    {
      x: 5,
      bgImg: 'url("images/content/slide3.jpg")'
    },
    {
      x: 10,
      bgImg: 'url("images/content/slide1.jpg")'
    },
    {
      x: 20,
      bgImg: 'url("images/content/slide2.jpg")'
    },
    {
      x: 25,
      bgImg: 'url("images/content/slide3.jpg")'
    }
  ];

  //����һ����ʱ��
  var timeID = null;

  //���е�ͼƬ����
  var $imgArr = [];

  for (var i = 0; i < $imgAttrs.length; i++) {
    var $img = partPicX($('#scrollPic'), $imgAttrs[i].x, $imgAttrs[i].bgImg);
    $imgArr.push($img);
  }


  //Ĭ����ʾ��ͼƬ
  var $index = 0;//ͼƬ����
  var $oldImgs = [];//��ͼƬ����


  for (var j = 0; j < $imgArr[$index].length; j++) {
    $('#scrollPic').append($imgArr[$index][j]);
    $imgArr[$index][j].show();
    $oldImgs.push($imgArr[$index][j]);
  }


  //�Զ��ֲ�
  autoPlay();

  //������ע����������Ƴ��¼�
  $('#scrollPic').on('mouseenter',function (){
  	clearInterval(timeID);
  }).on('mouseleave',function (){
    autoPlay();
  });

  //����һҳע���¼�

  $('#arr-r').on('click', function () {

    $('#scrollPic').css('background', $oldImgs[0].css('background'));
    for (var i = 0; i < $oldImgs.length; i++) {
      $oldImgs[i].css('display', 'none');
      $oldImgs[i].remove();
    }
    $oldImgs.length = 0;
    $index++;
    for (var j = 0; j < $imgArr[$index].length; j++) {
      $('#scrollPic').append($imgArr[$index][j]);
      $oldImgs.push($imgArr[$index][j]);
      $imgArr[$index][j].fadeIn(200 * j);
    }
    if ($index == $imgArr.length - 1) {
      $index = -1;
    }
  });

  //����һҳע���¼�
  $('#arr-l').on('click',function () {
    $('#scrollPic').css('background', $oldImgs[0].css('background'));
    for (var i = 0; i < $oldImgs.length; i++) {
      $oldImgs[i].css('display', 'none');
      $oldImgs[i].remove();
    }
    $oldImgs.length = 0;
    if ($index == 0) {
      $index = $imgArr.length;
    }
    $index--;

    for (var j = 0; j < $imgArr[$index].length; j++) {
      $('#scrollPic').append($imgArr[$index][j]);
      $oldImgs.push($imgArr[$index][j]);
      $imgArr[$index][j].fadeIn(200 * j);
    }

  });

  //��ͼƬ����X��ֿ�
  function partPicX(father, x, bgImg) {
    var $arr = [];
    var $width = father.width();
    var $height = father.height();
    var $perWidth = $width / x;
    for (var i = 0; i < x; i++) {
      var $div = $('<div></div>');
      $div.addClass('item');
      $div.css({
        'width': $perWidth,
        'height': $height,
        'position': 'absolute',
        'left': $perWidth * i,
        'background': bgImg,
        'display': 'none',
        'backgroundPosition': -$perWidth * i
      });
      $arr.push($div);
    }
    return $arr;
  }

  //��ͼƬ����Y��ֿ�
  function partPicY(father, y, bgImg) {
    var $width = father.width();
    var $height = father.height();
    var $perHeight = $height / y;
    for (var i = 0; i < y; i++) {
      var $div = $('<div></div>');
      $div.addClass('item');
      $div.css({
        'width': $width,
        'height': $perHeight,
        'position': 'absolute',
        'top': $perHeight * i,
        'background': bgImg,
        'backgroundPosition': 'left ' + (-$perHeight * i) + 'px'
      });
      $div.appendTo(father);
    }
  }

  //�Զ����ŷ���
  function autoPlay(){
    timeID = setInterval(function (){
      $('#arr-r').click();
    },3000);
  }

});
