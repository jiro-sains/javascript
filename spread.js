"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = [
	0,
	...numbers,
	10
];

console.log(newNumbers);