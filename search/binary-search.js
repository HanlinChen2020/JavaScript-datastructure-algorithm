function binarySearch(array, value) {
	let low = 0;
	let high = array.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (array[mid] < value) {
			low = mid + 1;
		} else if (array[mid] > value) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return 'Not Found';
}

const array = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(array, 10));