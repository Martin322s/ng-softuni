function dijkstra(graph: number[][], startNode: number): number[] {
    const numNodes = graph.length;
    const distances: number[] = new Array(numNodes).fill(Infinity);
    distances[startNode] = 0;
    const visited: boolean[] = new Array(numNodes).fill(false);

    for (let i = 0; i < numNodes - 1; i++) {
        const minDistanceNode = findMinDistanceNode(distances, visited);
        visited[minDistanceNode] = true;
        for (let j = 0; j < numNodes; j++) {
            if (!visited[j] && graph[minDistanceNode][j] !== 0 && distances[minDistanceNode] !== Infinity && 
                distances[minDistanceNode] + graph[minDistanceNode][j] < distances[j]) {
                distances[j] = distances[minDistanceNode] + graph[minDistanceNode][j];
            }
        }
    }

    return distances;
}

function findMinDistanceNode(distances: number[], visited: boolean[]): number {
    let minDistance = Infinity;
    let minDistanceNode = -1;
    for (let i = 0; i < distances.length; i++) {
        if (!visited[i] && distances[i] <= minDistance) {
            minDistance = distances[i];
            minDistanceNode = i;
        }
    }
    return minDistanceNode;
}
