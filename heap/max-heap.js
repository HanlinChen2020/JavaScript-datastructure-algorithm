import { defaultCompare } from '../util.js';
import { MinHeap } from './min-heap.js';

export class MaxHeap extends MinHeap {
	constructor(compareFn = defaultCompare) {
	    super(compareFn);
		this.compareFn = reverseCompare(compareFn);
	}
	
	findMaximum(){
		return this.isEmpty() ? undefined : this.heap[0];
	}
	findMinimum(){
		return this.isEmpty() ? undefined : this.heap[this.heap.length - 1];
	}
}

function reverseCompare(compareFn) {
	return function (a,b) {
		return compareFn(b, a);
	}
}

const heap = new MaxHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
heap.insert(0);
console.log(heap.findMinimum());
