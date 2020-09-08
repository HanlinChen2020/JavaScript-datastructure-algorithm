const forEach = (array, action) => array.forEach(item => action(item));
const logItem = (item) => console.log(item);

forEach([1,2,3,4,5],logItem);