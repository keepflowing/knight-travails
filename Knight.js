import Node from './Node.js';
/**
 * @module Knight
 */
export default class Knight {
  /** Create night and give it a square */
  constructor() {
    this.square = [7, 7];
  }
  /**
   * Create tree
   * @return {Node}
   */
  createTree() {
    const node = new Node(this.square);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i === node.coord[0] + 2 || i === node.coord[0] - 2) {
          if (j === (node.coord[1] + 1) || j === (node.coord[1] - 1)) {
            node.nextMoves.push([i, j]);
          }
        }
        if (j === node.coord[1] + 2 || j === node.coord[1] - 2) {
          if (i === (node.coord[0] + 1) || i === (node.coord[0] - 1)) {
            node.nextMoves.push([i, j]);
          }
        }
      }
    }
    return node;
  }
};
