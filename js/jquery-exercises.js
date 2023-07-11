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

    $('h1').on("click", (e) => {
        $(e.target).css("background", "green")
    });

    $('p').on('dblclick', () => {
        $('p').css('font-size', '18px')
    });

    $('li').on('mouseenter', (e) => {
                 $(e.target).css('color', 'red')
            .on('mouseleave', (e) => {
                 $(e.target).css('color', 'black')
            });
    });


});

