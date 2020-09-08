import { defaultCompare, Compare, swap } from './util.js';

function bubbleSort(array, compareFn = defaultCompare) {
	const length = array.length;
	for (let i = 0; i < length; i ++) {
		for (let j = 0; j < length - 1 - i;j ++) {
			if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
				swap(array, j, j + 1);
			}
		}
	}
	return array;
}