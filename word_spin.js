"use strict";

function reverseWord(string){
  let res = string.split("");
  return res.reverse().join('');
}

function spinWords(string){
  let res = string.split(" ");
  let result = [] ;
  for(var i = 0, l = res.length; i < l; ++i){
    if (res[i].length > 4) {
      let reversedWord = reverseWord(res[i])
      result.push(reversedWord);
    }
    else {
      result.push(res[i]);
    }
  }
  return result.join(' ');
}

let a = spinWords("hola amigos");
console.log(a);