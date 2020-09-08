//命令式编程
const positiveNumbers_ = function(array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive.push(array[i]);
        }
    }
    return positive;
}

//函数式编程ES2015
const positiveNumbers = (array) => array.filter(num => (num >= 0));
console.log(positiveNumbers([-1, 1, -2, 2]));