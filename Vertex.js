/**
 * @module Vertex
 */
export default class Vertex {
  /**
   * @param {array} coord
   */
  constructor(coord = null) {
    this.coord = coord;
    this.nextMoves = [];
  }
}
