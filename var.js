"use strict";

for(var i = 0; i < 10; i++){
	console.log("Hello "+ i);
}

console.log("The value of i is: " + i);

for(let j = 0; j < 10; j++) {
  console.log("Hello " + j);
}


const palabras = [
  "hello",
  "goodbye",
  "good day"
]

for(let value of palabras) {
  console.log(value);
}