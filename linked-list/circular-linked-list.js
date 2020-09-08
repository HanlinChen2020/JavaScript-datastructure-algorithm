class CircularLinkedNode {
	constructor(element) {
	    this.element = element;
		this.next = undefined;
	}
}

class CircularLinkedList {
	constructor() {
	    this.count = 0;
	    this.head = undefined;
	    this.euqalsFn = (a,b) => { return a === b; };
	}
	
	insert(element,index) {
		if(index >= 0 && index <= this.count) {
			const node = new CircularLinkedNode(element);
			let current = this.head;
			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					node.next = this.head;
				} else {
					node.next = current;
					current = this.getElementAt(this.size());	//更新最后一个元素
					this.head = node;
					current.next = this.head;
				}
			} else {
				const previous = this.getElementAt(index - 1);
				node.next = previous.next;
				previous.next = node;
			}
			this.count ++;
			return true;
		}
		return false;
	}
	
	removeAt(index) {
		if (index > 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				if (this.size() == 1) {
					this.head = undefined;
				} else {
					const removed = this.head;
					current = this.getElementAt(this.size());
					this.head = this.head.next;
					current.next = this.head;
					current = removed;
				}
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
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
	
	size() {
		return this.count;
	}
}