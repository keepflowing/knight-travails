/**
 * @module Knight
 */
export default class Knight {
  /**
   * Create Knight and give it a square
   * @param {number[]} [arr=[0,0]]
   */
  constructor(arr = [0, 0]) {
    this.square = arr;
    this.marker = 'N';
  }
};
