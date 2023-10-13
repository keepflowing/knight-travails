import Board from './Board.js';
import Knight from './Knight.js';

const board = new Board;
const knight = new Knight;

board.init();

board.squares[0][0] = 'x';

const node = knight.createTree();
console.log(node);
for (let i = 0; i < node.nextMoves.length; i++) {
  const a = node.nextMoves[i][0];
  const b = node.nextMoves[i][1];
  console.log(a, b);
  board.squares[a][b] = 'o';
}

board.draw();
// console.log(board.squares);
