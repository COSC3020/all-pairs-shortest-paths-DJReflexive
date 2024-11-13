# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

# Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.


## My Runtime Analysis

When the algorithm runs, it goes through a bunch different nested for loops. The first is a double-nested for loop which builds the dist matrix, filling it with all infinities, except on the main diagonal. This operation executes $|V|^2$ times. (However, while I did implement the algorithm as it was written in the README, this first double-nested loop is completely unnecessary since I am using an adjacency matrix representation... If I were to use an adjacency list representation, this step would be required.)

There is a second double-nested for loop which goes through through the graph and assigns each edge to the distance matrix. This operation also executes $|V|^2$ times.

And finally there is a triple-nested for loop. Each loop goes iterates once through the length of the graph. Meaning each loop exectes $|V|$ times, or $|V|^3$ all together.

Combining all these complexities, asymptotically we get $\Theta(|V|^2 + |V|^2 + |V|^3)$ which can be simplified to $\Theta(|V|^3)$. This is also the worst case runtime, because every element will be iterated through every time.

# Sources

- ChatGPT - Had it generate unit tests for me.

# Plagiarism Acknowledgment

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.