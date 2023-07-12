"use strict"
// Jquery functionality

// $(function (){
//
//    $('body').append(`<a href='#'>Toggle Invisibility</a>`)
//
//
//    $('a').on('click', () => {
//       $('dd').toggleClass('invisible')
//    });
//    $('dt').on('click', (e) => {
//       $(e.target).css('background-color', 'red')
//    });
// });
///////////////////////////////////////////////////////////////

//Javascript Vanilla Functionality

const toggleVisibilityLink = document.createElement('a');
toggleVisibilityLink.innerText = 'Toggle Visibility';

const bodyElement = document.querySelector('body');
bodyElement.appendChild(toggleVisibilityLink);

const ddElements = document.querySelectorAll('dd');
toggleVisibilityLink.addEventListener('click', () => {
   ddElements.forEach((ddElement) => {
      ddElement.classList.toggle('invisible');
   });
});

// const dtElements = document.querySelectorAll('dt');
//    dtElements.forEach((dtElement) => {
//       dtElement.addEventListener('click', () => {
//          dtElement.classList.toggle('highlighted');
//           });
//    });

const dlElement = document.querySelector('dl');
dlElement.addEventListener('click', (e) => {
   console.log(e.target);
   if (e.target.localName === 'dt') {
      e.target.classList.toggle('highlighted');
   }
})

// Traversal Exercise

$(function() {
   $('.submit-btn').on('click', () => {
      $('ul').each(function(index, element) {
         {
            $(element).children().last().toggleClass('highlighted')
         }
      });
   });

   $('h3').on('click', (e) => {
      $(e.target).next().css('font-weight', 'bold')
      });

   $('li').on('click', (e) => {
      $(e.target).parent().children().first().css('color', 'blue')
   });

   $('.button').on('click', () => {
      $('.button').prev().children().first().css('background-color', 'red')
      $('.button').prev().children().last().css('background-color', 'green')
   });



});



