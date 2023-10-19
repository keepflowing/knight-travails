import Board from './Board.js';

const board = new Board;

board.init();
board.draw();

// console.log(board.createGraph(knight.square));

import Graph from './Graph.js';

const graph = new Graph();
const lim = 7;

for (let i = 0; i <= lim; i++) {
  for (let j = 0; j <= lim; j++) {
    graph.addVertex([i, j]);
  }
}

for (let i = 0; i <= lim; i++) {
  for (let j = 0; j <= lim; j++) {
    if ((i+1) <= lim) {
      if ((j+2) <= lim) graph.addEdge([i, j], [i+1, j+2]);
    }
    if ((i-1) >= 0) {
      if ((j+2) <= lim) graph.addEdge([i, j], [i-1, j+2]);
    }
    if ((j+1) <= lim) {
      if ((i+2) <= lim) graph.addEdge([i, j], [i+2, j+1]);
    }
    if ((j-1) >= 0) {
      if ((i+2) <= lim) graph.addEdge([i, j], [i+2, j-1]);
    }
  }
}

console.log('----------------------------------------------');
// console.log(graph.adjacencyList);
console.log(graph.shortestPath([0, 0], [7, 7])[0]);
