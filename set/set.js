class Set {
	constructor() {
	    this.items = {};
	}
	
	// has(element) {
	// 	return element in this.items;
	// }
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element);
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element;
			return true;
		}
		return false;
	}
	
	delete(element) {
		if(this.has(element)) {
			delete this.items[element];
			return true;
		}
		return false;
	}
	
	size() {
		let count = 0;
		for (let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				count ++
			}
		}
		return count;
	}
	
	values() {
		let values = [];
		for (let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				values.push(key);
			}
		}
		return values;
	}
	
	//并集
	union(otherSet) {
		const unionSet = new Set();
		this.values().forEach(value => unionSet.add(value));
		otherSet.values().forEach(value => unionSet.add(value));
		return unionSet;
	}
	
	//交集
	intersection(otherSet) {
		const intersectionSet = new Set();
		const values = this.values();
		const otherValues = otherSet.values();
		let biggerSet = values;
		let smallerSet = otherValues;
		if (otherValues.length  > values.length) {
			smallerSet = values;
			biggerSet = otherValues;
		}
		smallerSet.forEach(value => {
			if (biggerSet.includes(value)) {
				intersectionSet.add(value);
			}
		});
		return intersectionSet;
	}
	//差集
	difference(otherSet) {
		const differenceSet = new Set();
		this.values().forEach(value => {
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			}
		});
		return differenceSet;
	}
	//子集
	isSubsetOf(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}
		let isSubset = true;
		this.values().every(value => {
			if (!otherSet.has(value)) {
				isSubset = false;
				return isSubset;
			}
		});
		return isSubset;
	}
}

const set1 = new Set();
set1.add(1);
set1.add(2);
const set2 = new Set();
set2.add(2);
console.log(set2.isSubsetOf(set1));
