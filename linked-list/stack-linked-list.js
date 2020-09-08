import DoublyLinkedList from './boubly-linked-list.js';

class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        this.items.clear();
    }
    
    toString() {
        return this.items.toString;
    }
}

// const sll = new StackLinkedList();
// sll.push(1);
// sll.push(3);
// sll.pop();
// console.log(sll.size());
