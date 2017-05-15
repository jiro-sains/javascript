"use strict";

function isPrime(num) {
	let input = Math.abs(num);
	if (input === 0 || input === 1) {
		return false;
	} else if (input === 2 && input === 3 && input === 5) {
		return true;
	} else if (input > 2 && input % 2 === 0) {
		return false;
	} else if (input > 3 && input % 3 === 0) {
		return false;
	} else if (input > 5 && input % 5 === 0) {
		return false;
	} else {
		return true;
	}
}


let a = isPrime(15);
console.log(a);