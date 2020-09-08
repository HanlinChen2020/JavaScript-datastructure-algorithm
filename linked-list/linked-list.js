import { defaultEquals } from '../util.js';
import { Node } from './models/linked-list-models.js';

export default class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0;
		this.head = undefined;
		this.euqalsFn = equalsFn;
	}
	
	//向链表尾部添加元素
	push(element) {
		const node = new Node(element);
		let current;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.count ++;
	}
	
	//从链表中移除元素
	removeAt(index) {
		//检查越界值
		if (index >= 0 && index < this.count) {
			let current = this.head;
			
			//移除第一项
			if (index === 0) {
				this.head = current.next;
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				//跳过current
				previous.next = current.next;
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
	
	insert(element,index) {
		if (index >=0 && index < this.count) {
			const node = new Node(element);
			if (index === 0) {
				const current = this.head;
				node.next = current;
				this.head = node;
			} else {
				const previous = this.getElementAt(index - 1);
				const current = previous.next;
				node.next = current;
				previous.next = node;
			}
			this.count ++;
			return true;
		}
		return false;
	}
	
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count && current != null; i ++) {
			if (this.euqalsFn(element, current.element)) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}
	
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	clear() {
		this.count = 0;
		this.head = undefined
	}
	
	size() {
		return this.count;
	}
	
	isEmpty() {
		return this.size() === 0;
	}
	
	getHead() {
		return this.head;
	}
	
	toString() {
		if (this.head == null) {
			return '';
		}
		let objString = `${this.head.element}`;
		let current = this.head.next;
		for (let i = 0; i < this.size() && current != null; i ++) {
			objString = `${objString},${current.element}`;
			current = current.next;
		}
		return objString;
	}
}