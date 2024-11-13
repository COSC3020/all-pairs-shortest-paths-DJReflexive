
export function allPairsShortestPaths(graph) {
    let len = graph.length;
    let dist = [];

    // Initialize Matrix
    for (let i = 0; i < len; i++) {
        dist.push([]);
        for (let j = 0; j < len; j++) {
            if (i == j) { dist[i].push(0); }
            else { dist[i].push(Infinity); }
        }
    }

    for (let u = 0; u < len; u++) {
        for (let v = 0; v < len; v++) {
            dist[u][v] = graph[u][v];
        }
    }

    for (let k = 0; k < len; k++) {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (dist[i][j] > (dist[i][k] + dist[k][j])) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}
