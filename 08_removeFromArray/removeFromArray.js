const removeFromArray = function(inputArr, ...elementsToRemove) {
    return inputArr.filter(item => !elementsToRemove.includes(item));   
};

// Do not edit below this line
module.exports = removeFromArray;
