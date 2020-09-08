function bubbleSort(array) {
    const { length } = array;
    let cost = 0;
    for (let i = 0; i < length; i++) {
        cost++;
        for (let j = 0; j < length - 1; j ++) {
            cost++
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    console.log(`cost for sequentialSearch with input size ${array.length} is ${cost}.`);
    return array;
}

console.log(bubbleSort([3,2,5,1,7]));