"use strict";

function toWeirdCaseWord(string){
  let res = string.split("");
  let result = [] ;
  for(var i = 0, l = res.length; i < l; ++i){
    if (i===0 || i % 2 === 0) {
      result.push(res[i].toUpperCase());
  } else
  {
    result.push(res[i].toLowerCase());
  }
  }
  return result.join('');
}

function toWeirdCase(string){
  let res = string.split(" ");
  let result = [] ;
  for(var i = 0, l = res.length; i < l; ++i){
    let oneWord = toWeirdCaseWord(res[i])
    result.push(oneWord);
  }

  return result.join(' ');
};

let a = toWeirdCase("hola amigos");
console.log(a);