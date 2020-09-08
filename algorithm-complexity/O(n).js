const sequentialSearch = (array, value) => {
    let cost = 0;
    for (let i = 0; i < array.length; i++) {
        cost++;
        if (value === array[i]) {
            console.log(`cost for sequentialSearch with input size ${array.length} is ${cost}.`);
            return i;
        }
    }
    console.log(`cost for sequentialSearch with input size ${array.length} is ${cost}.`);
    return -1;
}

const array = [1, 2, 5, 8];
console.log(sequentialSearch(array,10));