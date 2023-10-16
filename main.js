import Board from './Board.js';
import Knight from './Knight.js';

const board = new Board;
const knight = new Knight;

board.init();
board.draw();

console.log(board.createGraph(knight.square));
