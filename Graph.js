/**
 * @module Graph
 */
export default class Graph {
  /** Create adjacency list */
  constructor() {
    this.adjacencyList = new Map();
  }

  /**
   * Add vertex
   * @param {array} v
   */
  addVertex(v) {
    this.adjacencyList.set(v.toString(), []);
  }

  /**
   * Add edge, undirected
   * @param {array} origin
   * @param {array} destination
   */
  addEdge(origin, destination) {
    const o = origin.toString();
    const d = destination.toString();
    this.adjacencyList.get(o).push(d);
    this.adjacencyList.get(d).push(o);
  }

  /**
   * Breadth First Search
   * @param {array} origin
   * @param {array} destination
   * @return {array}
   */
  shortestPath(origin, destination) {
    const root = origin.toString();
    const goal = destination.toString();
    const adj = this.adjacencyList;


    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    // add vertices array and initialize it with root
    const predecessors = [];
    predecessors[root] = null;

    // add edges array and initialize it with root
    const edges = [];
    edges[root] = 0;

    const buildPath = (goal, root, predecessors) => {
      // declare and initialize a "stack"
      const stack = [];
      // push our goal to the stack
      stack.push(`[${goal}]`);

      let u = predecessors[goal];

      while (u != root) {
        // push each predecssor to the stack
        stack.push(`[${u}]`);
        u = predecessors[u];
      }

      // put the cherry on top
      stack.push(`[${root}]`);

      // LIFO
      const str = stack.reverse().join('->');
      return [str, stack];
    };

    while (queue.length) {
      // console.log(queue);
      const v = queue.shift();

      // return edges array if we find our goal
      if (v === goal) {
        // return edges[goal];
        return buildPath(goal, root, predecessors);
      }

      for (let i = 0; i < adj.get(v).length; i++) {
        if (!discovered[adj.get(v)[i]]) {
          discovered[adj.get(v)[i]] = true;
          queue.push(adj.get(v)[i]);
          edges[adj.get(v)[i]] = edges[v] + 1;

          predecessors[adj.get(v)[i]] = v;
        }
      }
    }

    return false;
  }
}
