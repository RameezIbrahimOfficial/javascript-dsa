// ======================================GRAPH======================================

class Graph {

    constructor() {
  
      this.vertices = [];
  
      this.edges = {};
  
    }
  
    addVertex(vertex) {
  
      this.vertices.push(vertex);
  
      this.edges[vertex] = [];
  
    }
  
    addEdge(vertex1, vertex2) {
  
      this.edges[vertex1].push(vertex2);
  
      this.edges[vertex2].push(vertex1);
  
    }
  
    bfs(startVertex) {
  
      const visited = {};
  
      const queue = [];
  
      visited[startVertex] = true;
  
      queue.push(startVertex);
  
      while (queue.length > 0) {
  
        const vertex = queue.shift();
  
        console.log(vertex);
  
        this.edges[vertex].forEach( (neighbor) => {if (!visited[neighbor]) {visited[neighbor] = true; queue.push(neighbor);}} );
  
      }
  
    }
  
    dfs(startVertex) {
  
      const visited = {};
  
      const dfsHelper = (vertex) => {
  
        visited[vertex] = true;
  
        console.log(vertex);
  
        this.edges[vertex].forEach((neighbor) => { if (!visited[neighbor]) { dfsHelper(neighbor); } } );
  
      };
  
      dfsHelper(startVertex);
  
    }
  
  }
  
  
  // ==========================TEST CASES==========================
  
  const graph = new Graph();
  
  // add vertices
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  
  // add edges
  graph.addEdge("1", "1");
  graph.addEdge("2", "3");
  graph.addEdge("3", "4");
  graph.addEdge("4", "1");
  
  // perform BFS
  console.log("BFS:");
  graph.bfs("1");
  
  // perform DFS
  console.log("DFS:");
  graph.dfs("1");