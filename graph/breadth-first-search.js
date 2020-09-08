import Graph from './graph.js';
import Queue from '../queue/queue.js';
import Stack from '../stack/stack.js';
import { printVertex } from './graph.js';

//广度优先搜索
export const breadthFirstSearch = (graph, startVertex, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	
	const queue = new Queue();
	queue.enqueue(startVertex); 
	
	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = Colors.GREY;
		for (let i = 0; i < neighbors.length; i ++) {
			const w = neighbors[i];
			if (color[w] === Colors.WHITE) {
				color[w] = Colors.GREY;
				queue.enqueue(w);
			}
		}
		color[u] = Colors.BLACK;
		if (callback) {
			callback(u);
		}
	}
}

//BFS寻找最短路径
const BFS = (graph, startVertex) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	const queue = new Queue();
	const distances = {};		//从源顶点到当前顶点的距离
	const predecessors = {}		//前溯点
	queue.enqueue(startVertex); 
	
	for (let i = 0; i < vertices.length; i ++) {
		distances[vertices[i]] = 0;
		predecessors[vertices[i]] = null;
	}
	
	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = Colors.GREY;
		for (let i = 0; i < neighbors.length; i ++) {
			const w = neighbors[i];
			if (color[w] === Colors.WHITE) {
				color[w] = Colors.GREY;
				distances[w] = distances[u] + 1;
				predecessors[w] = u;
				queue.enqueue(w);
			}
		}
		color[u] = Colors.BLACK;
	}
	return {
		distances,
		predecessors
	};
}

const Colors = {
	WHITE : 0,	//未被访问
	GREY : 1,	//被访问过，但未被探索过
	BLACK : 2	//被访问过且被完全探索过
}

const initializeColor = vertices => {
	const color = {};
	for (let i = 0; i < vertices.length; i ++) {
		color[vertices[i]] = Colors.WHITE;
	}
	return color;
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
//添加顶点
for (let i = 0; i < myVertices.length; i ++) {
	graph.addVertex(myVertices[i]);
}
//添加路径
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
//展示图
console.log(graph.toString());

breadthFirstSearch(graph, myVertices[0], printVertex);
//最短路径
const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);

const fromVertex = myVertices[0];
//打印A到其它顶点的最短路径
for (let i = 1; i < myVertices.length; i ++) {
	const toVertex = myVertices[i];
	const path = new Stack();
	for (let v = toVertex; 
			v != fromVertex; 
			v = shortestPathA.predecessors[v]) {
		path.push(v);
	}
	path.push(fromVertex);
	let s = path.pop();
	while (!path.isEmpty()) {
		s += ' - ' + path.pop();
	}
	console.log(s);
}