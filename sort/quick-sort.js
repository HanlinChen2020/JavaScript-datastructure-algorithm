export function quickSort(array) {
	return quick(array, 0, array.length - 1);
}

function quick(array, left, right) {
	let index;
	if (array.length > 1) {
		index = partition(array, left, right);
		if (left < index - 1) {
			quick(array, left, index - 1);
		}
		if (index < right) {
			quick(array, index, right);
		}
	}
	return array;
}

function partition(array, left, right) {
	const pivot = array[Math.floor((left + right) / 2)];
	let i = left;
	let j = right;
	while (i <= j) {
		while (array[i] < pivot) {
			i ++;
		}
		while (array[j] > pivot) {
			j --;
		}
		if (i <= j) {
			swap(array, i, j);
			i ++;
			j --;
		}
	}
	return i;
}

const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];