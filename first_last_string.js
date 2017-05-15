"use strict";

function removeChar(str){
 //You got this!
  let res = str.split("");
  res.splice(-1,1);
  res.splice(0,1);
  let palabra = res.join('');
  return palabra;
};

let a = removeChar("Howdy")
console.log(a);