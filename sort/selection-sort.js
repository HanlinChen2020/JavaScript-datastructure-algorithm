import { defaultCompare, Compare, swap } from './util.js';

function selecetionSort(array, compareFn = defaultCompare) {
	const { length } = array;
	for (let i = 0; i < length - 1; i ++) {
		indexMin = i;
		for (let j = i; j < length; j ++) {
			if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
				indexMin  = j;
			}
		}
		if (i !== indexMin) {
			swap(array, i, indexMin);
		}
	}
	return array;
}

const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

function defaultCompare(a, b) {
	if (a === b) {
		return 0;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

const Compare = {
	LESS_THAN : -1,
	BIGGER_THAN : 1
}