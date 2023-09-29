const removeFromArray = function(array, ...remove) {

    const newArray = [];

array.forEach((item) => {
    if (!remove.includes(item)) {
        newArray.push(item);
    }
})

return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
