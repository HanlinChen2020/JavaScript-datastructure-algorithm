//命令式
const mergeArrays_ = function (arrays) {
    const count = arrays.length;
    let newArray = [];
    let k = 0;
    for (let i = 0; i < count; i++) {
        for (var j = 0; j < arrays[i].length; j++) {
            newArray[k++] = arrays[i][j];
        }
    }
    return newArray;
}

//函数式
const mergeArraysConcat = function(arrays) {
    return arrays.reduce(function(current, next) {
        return current.concat(next);
    })
}

//ES2015

const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1,2,3],[4,5],[6]));