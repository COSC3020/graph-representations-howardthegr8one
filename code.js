
function convertToAdjMatrix(graph) {
    var numNodes = graph.length;
    // initialize matrix values with zeros
    var matrix = new Array(numNodes).fill(0).map(() => new Array(numNodes).fill(0));

    var index = -1;
    // iteratively replaces 0s with 1s for corresponding edges in matrix
	for (var i = 0; i < graph.length; i++) {
        index++;
		for (var j = 0; j < graph[i].length; j++) {
            var curr = graph[i][j];
            if (index != curr)
                matrix[index][curr] = 1;
        }
    }
    return matrix;
}
