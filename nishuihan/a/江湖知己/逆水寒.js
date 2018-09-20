/**
 * Created by gan on 2018/8/14.
 */
$(function(){
    $(window).on('scroll',function() {
        var scrolltop = $ ( window ).scrollTop ();
        var boxHeight = $ ( '.sonBox1' ).height ();
        var sonBox1 = $ ( '.sonBox1' ).offset ().top;
        var sonBox2 = $ ( '.sonBox2' ).offset ().top;
        var sonBox3 = $ ( '.sonBox3' ).offset ().top;
        /* var*/
        // console.log(scrolltop)
        // console.log(sonBox1)
        console.log ( scrolltop );
        console.log ( boxHeight );
        // console.log(sonBox2)
        // console.log(sonBox3)
    })
})
