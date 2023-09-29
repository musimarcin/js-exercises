const removeFromArray = function(array, ...remove) {

    let found_item = -1;

    for (const item_to_remove of remove) {
        for (const item of array) {
            if (item === item_to_remove) {
                found_item = array.indexOf(item);
                array.splice(found_item, 1);
            }
        }
    }

return array;

};

// Do not edit below this line
module.exports = removeFromArray;
