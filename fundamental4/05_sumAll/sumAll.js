const sumAll = function(begin, finish) {

    let sum = 0;

    if (begin < 0 || finish < 0 || !Number.isInteger(begin) || !Number.isInteger(finish)) {
        return "ERROR"
    } else {
        if (begin > finish) {
            let temp = begin;
            begin = finish;
            finish = temp;
        }
            for (let i = begin ; i <= finish ; i++) {
                sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
