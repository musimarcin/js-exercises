const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.reduce((total, current) => total * current);
};

const power = function(x, y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
    if (x === 0 || x === 1) return 1;
    let sum = 1;
    for (let i = x; i > 0; i--) {
      sum*=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
