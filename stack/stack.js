//使用对象实现栈
export default class Stack {
	constructor() {
	    this.count = 0;
		this.items = {};
	}
// 	//方法
	push(element) {
		this.items [this.count] = element;
		this.count ++;
	}
	
	size() {
		return this.count;
	}
	
	isEmpty() {
		return this.count === 0;
	}
	
	pop() {
		if (this.isEmpty()){
			return undefined;
		}
		this.count --;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}
	
	peak() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count -1];
	}
	
	clear() {
		this.items = {};
		this.count = 0;
	}
	
	// clear() {
	// 	while (!this.isEmpty()){
	// 		this.pop();
	// 	}
	// }
	
	toString() {
		if (this.isEmpty()){
			return '';
		}
		let objString = `${this.items[0]}`;
		for (let i = 1; i < this.count; i ++) {
			objString = `${objString},${this.items[i]}`;
		}
		return objString;
	}
}

//使用数组实现栈
// class Stack {
// 	constructor() {
// 		this.items = [];
// 	}
	
// 	push(element) {
// 		this.items.push(element);
// 	}
	
// 	pop() {
// 		this.items.pop();
// 	}
	
// 	peak() {
// 		return this.items[this.items.length - 1];
// 	}
	
// 	isEmpty() {
// 		return this.items.length === 0;
// 	}
	
// 	size() {
// 		return this.items.length;
// 	}
// }