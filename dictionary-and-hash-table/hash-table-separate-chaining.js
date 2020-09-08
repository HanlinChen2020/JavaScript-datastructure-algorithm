import { defaultToString } from './util.js';
import { ValuePair } from './dictionary.js';
import LinkedList from './linked-list.js';

class HashTableSeparateChaining {
	constructor(toStrFn = defaultToString) {
	    this.toStrFn = toStrFn;
		this.table = {};
	}
	
	put(key,value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			if (this.table[position] == null) {
				this.table[position] = new LinkedList();
			}
			this.table[position].push(new ValuePair(key, value));
			return true;
		}
		return false;
	}
	
	get(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
		}
		return undefined;
	}
	
	remove(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element);
					if (linkedList.isEmpty()) {
						delete this.table[position];
					}
					return true;
				}
				current =  current.next;
			}
		}
		return false;
	}
	
	loseloseHashCode(key) {
		if (typeof key == 'number') {
			return key;
		}
		const tableKey = this.toStrFn(key);
		let hash = 0;
		for (let i = 0; i < tableKey.length; i ++) {
			hash += tableKey.charCodeAt(i);
		}
		return hash % 37;
	}
	
	hashCode(key) {
		return this.loseloseHashCode(key);
	}
}