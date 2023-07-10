 "use strict"
//
//
// $(function() {
//
//     alert($('#id-example-1').html());
//
//     $('.code-up')
//         .css('border','1px solid red');
//
//     $('li').css("font-size", "20px");
//
//     $('h1, p, li').css("background-color", "yellow");
//
//     alert($('h1').html());
//
//
// });

 $(function () {

     $('h1').click(function() {
         $('h1').css("backgroundColor", "red")

     });

     $('p').dblclick(function() {
        $('p').css("font-size", '18px')
     });

     $('li').mouseenter(function() {
         $(this).css("color", "red")
             .mouseleave(function() {
                 $(this).css("color", "black")
             });

     });


 });

