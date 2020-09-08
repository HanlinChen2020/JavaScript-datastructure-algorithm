import { defaultToString } from './util.js';
import { ValuePair } from './dictionary.js';


class HashTable {
	constructor(toStrFn = defaultToString) {
	    this.toStrFn = toStrFn;
		this.table = {};
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
	
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			this.table[position] = new ValuePair(key, value);
			return true;
		}
		return false;
	}
	
	get(key) {
		const valuePair = this.table[this.hashCode(key)];
		return valuePair == null ? undefined : valuePair.value;
	}
	
	remove(key) {
		const hash = this.hashCode(key);
		const valuePair = this.table[hash];
		if (valuePair != null) {
			delete this.table[hash];
			return true;
		}
		return false;
	}
}


const hashTable = new HashTable();
hashTable.put('姓名', '李乐天');
hashTable.put('性别', '女');
hashTable.put('年龄', '23');
console.log(hashTable.remove('年龄'));
console.log(hashTable.table);