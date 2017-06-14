"use strict";

function checkPalindrome(string){
  return (string === string.split("").reverse().join(""));
}

function longestPalindrome(string){
  let result = 0 ;
  //stringLength = res.length;
  for(var i = 0, l = (string.length-1); i <= l; ++i){
    for(var j = i+1, l2 = string.length+1; j < l2; ++j){
      let sub = string.substring(i,j);
      if (checkPalindrome(sub) &&  sub.length > result) {
        result = sub.length;
      }
    }
  }
  return result;
}

let a = longestPalindrome("zzbaabcd");
console.log(a);