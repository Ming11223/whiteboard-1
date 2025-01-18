function findPath(graph, start, end) {
    // Set to track visited nodes
    const visited = new Set();
    // Stack to maintain current path
    const stack = [[start, [start]]];

    while (stack.length > 0) {
        const [currentNode, path] = stack.pop();

        if (currentNode === end) {
            return { exists: true, path }; // Path found
        }

        if (!visited.has(currentNode)) {
            visited.add(currentNode);

            // Add neighbors to the stack
            if (graph[currentNode]) {
                for (const neighbor of graph[currentNode]) {
                    if (!visited.has(neighbor)) {
                        stack.push([neighbor, [...path, neighbor]]);
                    }
                }
            }
        }
    }

    return { exists: false, path: [] }; // No path found
}

// Example Graph
const graph = {
    A: ["B"],
    B: ["A", "C", "D", "E"],
    C: ["F"],
    D: ["G", "E"],
    E: ["F"],
    F: ["B", "G"],
    G: [],
    H: []
};

// Test Cases
console.log(findPath(graph, "D", "B")); // { exists: false, path: [] }
console.log(findPath(graph, "F", "A")); // { exists: true, path: ['F', 'B', 'A'] }
console.log(findPath(graph, "G", "C")); // { exists: false, path: [] }
console.log(findPath(graph, "E", "D")); // { exists: true, path: ['E', 'F', 'B', 'D'] }
