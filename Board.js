import Vertex from './Vertex.js';
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

  /**
   * @param {int[]} [first=[0, 0]]
   * @param {int[]} [last=[7, 7]]
   * @return {Vertex}
   */
  createGraph(first = [0, 0], last = [7, 7]) {
    return new Vertex(first);
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
