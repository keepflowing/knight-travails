import Board from './Board.js';
import Knight from './Knight.js';

const board = new Board;
const knight = new Knight;

board.init();
board.squares[0][0] = knight.marker;
board.draw();
