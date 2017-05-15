"use strict";

var _ =
	join: (array, separator = ',') => {
		let result = '';
		for (let item in array) {
			result = result + separator 
		}

	}
}

const value = _.join(["hello", "goodbye"], ",")

console.log(value);

