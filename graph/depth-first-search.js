import Graph from './graph.js';
import { printVertex } from './graph.js';
//深度优先算法
export const depthFirstSearch = (graph, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	
	for (let i = 0; i < vertices.length; i ++) {
		if (color[vertices[i]] === Colors.WHITE) {
			depthFirstSearchVisit(vertices[i], color, adjList, callback);
		}
	}
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
	color[u] = Colors.GREY;
	if (callback) {
		callback(u);
	}
	const neighbors = adjList.get(u);
	for (let i = 0; i < neighbors.length; i ++) {
		const w = neighbors[i];
		if (color[w] === Colors.WHITE) {
			depthFirstSearchVisit(w, color, adjList, callback);
		}
	}
	color[u] = Colors.BLACK;
};

//改进的深度优先算法
//顶点u发现时间为d[u]，
//当顶点u被标注为黑色时，u的完成探索时间f[u];
// 顶点u的前溯点p[u]。
export const DFS = (graph) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	
	const d = {}, f = {}, p = {};
	const time = { count : 0 };
	
	for (let i = 0; i < vertices.length; i ++) {
		if (color[vertices[i]] === Colors.WHITE) {
			DFSVisit(vertices[i], color, d, f, p, time, adjList);
		}
	}
	return {
		discovery: d,
		finished: f,
		predecessors: p
	};
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
	color[u] = Colors.GREY;
	d[u] = ++ time.count;
	const neighbors = adjList.get(u);
	for (let i = 0; i < neighbors.length; i ++) {
		const w = neighbors[i];
		if (color[w] === Colors.WHITE) {
			p[w] = u;
			DFSVisit(w, color, d, f, p, time, adjList);
		}
	}
	color[u] = Colors.BLACK;
	f[u] = ++ time.count;
};

const Colors = {
	WHITE : 0,	//未被访问
	GREY : 1,	//被发现，但未被探索过
	BLACK : 2	//被访问过且被完全探索过
}

const initializeColor = vertices => {
	const color = {};
	for (let i = 0; i < vertices.length; i ++) {
		color[vertices[i]] = Colors.WHITE;
	}
	return color;
}
//测试深度优先算法
const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
//添加顶点
for (let i = 0; i < myVertices.length; i ++) {
	graph.addVertex(myVertices[i]);
}
//添加路径
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');
// depthFirstSearch(graph, printVertex);

