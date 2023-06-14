'use strict';

let i = 2;

while (i < 65537) {
    console.log('while loop iteration #' + i);
    i *= 2;
}










// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

      do {
         let conesSold = Math.floor(Math.random() * 5) + 1;
          console.log(allCones - conesSold);
      } while (allCones === 0);