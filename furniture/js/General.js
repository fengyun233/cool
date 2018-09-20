// $ ( function () {
//     $ ( ".tabs li" ).on ( "click", function () {
//         $ ( this ).find ( "a" ).css ( {
//             color : "#ffa600", backgroundColor : "#fff"
//         } );
//
//     } );
//     $ ( ".tab-content" ).css ( "display", "none" );
// } );
$ ( function () {
    // $ ( "p" ).blowup ( {
    //     background : "#fff"
    // } );
    $('p.beatText').beatText({isAuth:false,isRotate:false});
} );
