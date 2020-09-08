import { default as LinkedList } from './linked-list.js';
import { Node } from './models/linked-list-models.js';
import { defaultEquals } from '../util.js';

class DoublyNode extends Node {
	constructor(element, next, prev) {
		super(element, next);
		this.prev = prev;
	}
} 

export default class DoublyLinkedList extends LinkedList{
	constructor( euqalsFn = defaultEquals) {
		super(euqalsFn);
		this.tail = undefined;
	}
	
	insert(element, index) {
		if (index >=0 && index <= this.count) {
			const node = new DoublyNode(element);
			let current = this.head;
			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					this.tail = node;
				} else {
					node.next = this.head;
					current.prev = node;
					this.head = node;
				}
			} else if (index === this.count) {
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				node.next = current;
				previous.next = node;
				current.prev = node;
				node.prev = previous;
			}
			this.count ++;
			return true;
		}
		return false;
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				this.head = current.next;
				if (this.count === 1) {
					this.tail = undefined;
				} else {
					this.head.prev = undefined;
				} 
			} else if (index === this.count - 1) {
					current = this.tail;
					this.tail = current.prev;
					this.tail.next = undefined;
			} else {
				current = this.getElementAt(index);
				//Unsolved error;
				const previous = current.prev;
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.count --;
			return current.element;
		}
		return undefined;
	}
	
	getElementAt(index) {
		if (index >= 0 && index < this.count) {
			let node = this.head;
			for (let i = 0; i < index && node != null; i ++) {
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
}

// const dll = new DoublyLinkedList();
// dll.push(3);
// dll.push(1);
// dll.insert(2,1);
// dll.removeAt(2);
// console.log(dll.size());