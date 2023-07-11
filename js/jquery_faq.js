"use strict"
// Jquery functionality

//
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

const dtElements = document.querySelectorAll('dt');
dtElements.forEach((dtElement) => {
   dtElement.addEventListener('click', () => {
      dtElement.classList.toggle('highlighted');
   });
});


