

/* This way won't work, as arithmetic operators will not work on strings */
let star ="************";

do{
    star -= "*"
    console.log(star);
} while (star.length >= 1)

/* Alternate way to make this work */

let starCount = 13;
do{
    console.log("*".repeat(starCount));
    starCount--;
} while(starCount >= 1) 
  
