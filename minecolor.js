"use strict";

function mineColor(line, number) {
	let black_lines = ["a","c","e","g"];
	if (black_lines.includes(line)) {
		if (number % 2 !== 0) {
			return "black";
		} else {
			return "white";
		}
	} else {
		if (number % 2 !== 0) {
			return "white";
		} else {
			return "black";
		}
	}
}


let a = mineColor("b",1)
console.log(a);