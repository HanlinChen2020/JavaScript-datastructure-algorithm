import { defaultCompare, Compare, swap } from '../util.js';

export class MinHeap {
	constructor(compareFn = defaultCompare) {
	    this.heap = [];
		this.compareFn = compareFn;
	}
	
	getLeftIndex(index) {
		return 2 * index + 1;
	}
	
	getRightIndex(index) {
		return 2 * index  + 2;
	}
	
	getParentIndex(index) {
		return index === 0 ? undefined : Math.floor(index / 2);
	}
	
	insert(value) {
		if (value != null) {
			this.heap.push(value);
			this.siftUp(this.heap.length - 1);
			return true;
		}
		return false;
	}
	
	siftUp(index) {
		let parent = this.getParentIndex(index);
		while (
			index > 0 && 
			this.compareFn(this.heap[parent], this.heap[index]) == 
		Compare.BIGGER_THAN
			) {
				swap(this.heap, parent, index);
				index = parent;
				parent = this.getParentIndex(index);
			}
	}
	
	//移除第一个值（最小值）
	extract() {
		if (this.isEmpty()) {
			return undefined;
		}
		if (this.size() === 1) {
			return this.heap.shift();
		}
		const removedValue = this.heap.shift();
		this.shiftDown(0);
		return removedValue;
	}
	
	shiftDown(index) {
		let element = index;
		const left = this.getLeftIndex(index);
		const right = this.getRightIndex(index);
		const size = this.size();
		if (
			left < size && this.compareFn(this.heap[element], this.heap[left]) ==
			Compare.BIGGER_THAN
		) {
			element = left;
		}
		if (
			right < size && this.compareFn(this.heap[element], this.heap[right]) ==
			Compare.BIGGER_THAN
		) {
			element = right;
		}
		if (index !== element) {
			swap(this.heap, index, element);
			this.shiftDown(element);
		}
	}
	
	size() {
		return this.heap.length;
	}
	
	isEmpty() {
		return this.size() === 0;
	}
	findMinimum(){
		return this.isEmpty() ? undefined : this.heap[0];
	}
}

// const heap = new MinHeap();

// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(1);
// heap.insert(0);
// heap.extract();
// console.log(heap.findMinimum());
