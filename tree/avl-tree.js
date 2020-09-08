import { default as BinarySearchTree } from "./binary-searchstree.js";
import { defaultCompare, Compare } from "../util.js";
import { Node } from './models/node.js';

class AVLTree extends BinarySearchTree {
	constructor (compareFn = defaultCompare) {
		super(compareFn);
		this.compareFn = compareFn;
		this.root = null;
	}

	getNodeHeight(node) {
		if (node == null) {
			return -1;
		}
		return Math.max(
			this.getNodeHeight(node.left),  this.getNodeHeight(node.right)
		) + 1;
	}

	getBalanceFactor(node) {
		const heightDifference = this.getNodeHeight(node.left) -
		this.getNodeHeight(node.right);
		switch (heightDifference) {
			case -2:
				return BalanceFactor.UNBALANCED_RIGHT;
			case -1:
				return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
			case 1:
				return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
			case 2:
				return BalanceFactor.UNBALANCED_LEFT;
			default:
				return BalanceFactor.BALANCED;
		}
	}

	rotationLL(node) {
		const tmp = node.left;
		node.left = tmp.right;
		tmp.right = node;
		return tmp;
	}

	rotationRR(node) {
		const tmp = node.right;
		node.right = tmp.left;
		tmp.left = node;
		return tmp;
	}

	rotationLR(node) {
		node.left = this.rotationRR(node.left);
		return this.rotationLL(node);
	}

	rotationRL(node) {
		node.right = this.rotationLL(node.right);
		return this.rotationRR(node);
	}

	insert(key) {
		this.root = this.insertNode(this.root, key);
	}

	insertNode(node, key) {
		//像在BST中一样插入节点
		if (node == null) {
			return new Node(key);
		} else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			node.left = this.insertNode(node.left, key);
		} else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
			node.right = this.insertNode(node.right, key);
		} else {
			return node;		//重复的键
		}
		//如果需要，将树进行平衡操作
		const balanceFactor = this.getBalanceFactor(node);
		if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
			if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
				node = this.rotationLL(node);
			} else {
				return this.rotationLR(node);
			}
		}
		if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
			if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
				node = this.rotationRR(node);
			} else {
				return this.rotationRL(node);
			}
		}
		return node;
	}

	removeNode(node, key) {
		node = super.removeNode(node, key);
		if (node == null) {
			return node; //null，不需要进行平衡
		}
		//检测是否平衡
		const balanceFactor = this.getBalanceFactor(node);
		if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
			const balanceFactorLeft = this.getBalanceFactor(node.left);
			if (
				balanceFactorLeft === BalanceFactor.BALANCED ||
				balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
			) {
				return this.rotationLL(node);
			}
			if (
				balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
			) {
				return this.rotationLR(node.left);
			}
		}
		if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
			const balanceFactorRight = this.getBalanceFactor(node.right);
			if (
				balanceFactorRight === BalanceFactor.BALANCED ||
				balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
			) {
				return this.rotationRR(node);
			}
			if (
				balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
			) {
				return this.rotationRL(node.right);
			}
		}
		return node;
	}
}

const BalanceFactor = {
	UNBALANCED_RIGHT: 1,
	SLIGHTLY_UNBALANCED_RIGHT: 2,
	BALANCED: 3,
	SLIGHTLY_UNBALANCED_LEFT: 4,
	UNBALANCED_LEFT: 5
}
const printNode = (value) => console.log(value);

const avlTree = new AVLTree();

avlTree.insert(7);
avlTree.insert(8);
avlTree.insert(9);
avlTree.insert(3);
avlTree.insert(6);
avlTree.insert(10);
avlTree.insert(13);
avlTree.insert(12);
avlTree.insert(14);
avlTree.insert(20);
avlTree.insert(18);
avlTree.insert(25);
avlTree.remove(6);
avlTree.inOrderTraverse(printNode);
// console.log(avlTree.root);



