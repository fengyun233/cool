$(function( ){
//  ���岿�� ����ģ����ʾ��ɫģ��
    $('.ls').on('mouseenter', function () {
        $(this).children('.innerbox').children('.dh').stop(true, false).animate({
            top: 0
        }, 250, 'swing');
    });//�����¼���������
    $('.ls').on('mouseleave', function () {
        $(this).children('.innerbox').children('.dh').stop(true, false).animate({
            top: 278
        }, 0, 'swing');
    });//�Ƴ��¼���������


//  ������ʾNBDͼƬ
//ͷ������
    $('.xn_lq').mouseenter(function () {
        $("#xn_nba").show().css('z-index','2');
    })
    $('.xn_lq').mouseleave(function () {
        $("#xn_nba").hide();
    });




    //��Ѷ��Ϸ���а��������
    $('.tengxun_game').on('mouseenter',function(){
        $(this).css('color','red');
        $('.bigbox').show();
    })
    $('.bigbox').on('mouseleave',function(){
        $('.tengxun_game').css('color','#464646');
        $('.bigbox').hide();
    })







    //��Ѷ��Ϸ�����У���ȡ��ǰ��li��ǩ�����������¼�
    $('.bigbox .ost_rank li.rank-item').on('mouseenter',function(){
        $(this).children('div.rank-name-game').show().parent().siblings().children('div.rank-name-game').hide();
    });



});//��ں�������

