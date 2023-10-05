const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
  let sum = 0;
	for (const item of array) {
      sum += item;
    }
    return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (const item of array) {
    sum *= item;
  }
  return sum;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
    if (x === 0 || x === 1) { return 1;
    } else {
        let sum = x;
        for (let i = (x-1); i > 0; i--) {
          sum*=i;
        }
        return sum;
    }
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
