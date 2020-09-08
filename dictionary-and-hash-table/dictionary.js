import { defaultToString } from '../util.js'

export default class Dictionary {
	constructor(toStrFn = defaultToString) {
	    this.toStrFn = toStrFn;
		this.table = {};
	}
	
	hasKey(key) {
		return this.table[this.toStrFn(key)] != null;
	}
	
	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key);
			this.table[tableKey] = new ValuePair(key, value);
			return true;
		}
		return false;
	}
	get(key) {
		const valuePair = this.table[this.toStrFn(key)];
		return valuePair == null ? undefined : valuePair.value;
	}
	
	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)];
			return true;
		}
		return false;
	}
	
	keyValues() {
		const valuePairs = [];
		for (const k in this.table) {
			if (this.hasKey(k)) {
				valuePairs.push(this.table[k]);
			}
		}
		return valuePairs;
	}
	
	keys() {
		return this.keyValues().map(valuePair => valuePair.key);
	}
	
	values() {
		return this.keyValues().map(valuePair => valuePair.value);
	}
	
	forEach(callbackFn) {
		const valuePairs = this.keyValues();
		for (let i = 0; i < valuePairs.length; i ++) {
			const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
			if (result === false) {
				break;
			}
		}
	}
	
	size() {
		return Object.keys(this.table).length;
	}
	
}

export class ValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
	toString() {
		return `${this.key}: ${this.value}`;
	}
}

// const dic = new Dictionary();
// dic.set('Mary', 'h.he@cranfield.ac.uk');
// dic.set('Letian LI', 'Letian.Li@cranfield.ac.uk');
// console.log(dic.keys());
// console.log(dic.values());
// console.log(dic.get('Letian LI'));
// dic.forEach((k, v) => {
// 	console.log(`key:${k}, value:${v}`);
// });