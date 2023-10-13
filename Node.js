/**
 * @module Node
 */
export default class Node {
  /**
   * @param {array} coord
   */
  constructor(coord = null) {
    this.coord = coord;
    this.nextMoves = [];
  }
}
