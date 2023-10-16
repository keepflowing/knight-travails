import Vertex from './Vertex.js';
/**
 * @module Board
 */
export default class Board {
  /** Create board */
  init() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      const nestedArr = [];
      for (let j = 0; j < 8; j++) {
        nestedArr.push(j+1);
      }
      arr.push(nestedArr);
    }
    this.squares = arr;
  }

  /** Draw board in terminal*/
  draw() {
    for (let i = 7; i >= 0; i--) {
      let str = ''; // i+1;
      for (let j = 0; j < 8; j++) {
        if (!j) str += '';
        else str += '  ';
        str += this.squares[j][i];
      }
      console.log(str);
    }
    console.log('-----------------------');
    console.log('A  B  C  D  E  F  G  H');
  }
}
