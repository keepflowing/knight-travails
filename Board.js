/**
 * @module Board
 */
export default class Board {
  /** Create board */
  init() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        arr.push([i, j]);
      }
    }
    this.squares = arr;
  }

  /** Draw board in terminal*/
  draw() {
    let str = '';
    for (let i = 7; i >= 0; i--) {
      for (let j = 0; j < 8; j++) {
        str += `[${this.squares[(j*8)+i]}]`;
      }
      console.log(str);
      console.log(' ');
      str = '';
    }
  }
}
