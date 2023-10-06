const findTheOldest = function(array) {
    return array.reduce((acc, current) => {
        const accAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return accAge < currentAge ?  current :  acc;
        });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
