export function defaultToString(item) {
	if (item === null) {
		return 'NULL';
	} else if (item === undefined) {
		return 'UNDEFINED';
	} else if (typeof(item) === 'string' || tiem instanceof String) {
		return `${item}`;
	}
	return  item.toString();
}

export function defaultEquals(a, b) {
	return a === b;
}

export function defaultCompare(a, b) {
	if (a === b) {
		return 0;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

export const Compare = {
	LESS_THAN : -1,
	EQUALS : 0,
	BIGGER_THAN : 1
}
export const defaultDiff = (a, b) => a - b;

export function findMaxValue(array) {
	let max = array[0];
	for (let i = 0; i < array.length; i ++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

export function findMinValue(array) {
	let min = array[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return min;
}