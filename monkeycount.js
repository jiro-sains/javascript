"use strict";

function monkeyCount(n){
 let i = 1;
 let result = [];
 for (i = 1; i <= n; i++) { 
    result.push(i); ;
 }
  return result;
};

let a = monkeyCount(10)
console.log(a);