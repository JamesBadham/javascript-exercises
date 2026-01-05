const sumAll = function(first, second) {
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
        return 'ERROR';
    }
    let start = first;
    let end = second;
    let sum = 0;
    if (first > second) {
        start = second;
        end = first;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;        
};

// Do not edit below this line
module.exports = sumAll;
