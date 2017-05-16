"use strict";

function join (array, separator = ',') {
		let result = '';
		for(var i = 0, l = array.length; i < l; ++i) {
      if (i === l - 1) {
        result = result.concat(array[i]);
      } else {
			result = result.concat(array[i],separator); 
      }
		}
  return result;
}


const value = join(["hello", "goodbye", "no more"], ",")

console.log(value);

