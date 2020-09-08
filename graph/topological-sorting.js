import Graph from './graph.js';
import { DFS } from './depth-first-search.js';

const graph = new Graph(true); //有向图
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices.length; i ++) {
	graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph);

const fTimes = result.finished;
var s = '';
for (let count = 0; count < myVertices.length; count ++) {
	let max = 0;
	let maxName = null;
	for (let i = 0; i < myVertices.length; i ++) {
		if(fTimes[myVertices[i]] > max) {
			max = fTimes[myVertices[i]];
			maxName = myVertices[i];
		}
	}
	s += maxName + ' => ';
	delete fTimes[maxName];
}
console.log(s);

