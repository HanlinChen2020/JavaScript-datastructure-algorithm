//命令式
const sumValue = function(array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

//或者

const sum_ = function (array) {
    return array.reduce(function(a, b) {
        return a + b;
    });
};

//函数式ES2015

const sum = array => array.reduce((a, b) => a + b);

console.log(sum([1,2,3,4,5]));