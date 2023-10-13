function convertToAdjMatrix(adjList) {
    var numNodes = Object.keys(adjList).length;
    // initialize matrix values with zeros
    var matrix = new Array(numNodes).fill(0).map(() => new Array(numNodes).fill(0));

    var index = -1;
    // iteratively replaces 0s with 1s for corresponding edges in matrix
	for (var i in adjList) {
        index++;
		for (var j in adjList[i]) {
            var curr = adjList[i][j];
            var cIndex = Object.keys(adjList).indexOf(curr);
            matrix[index][cIndex] = 1;
        }
    }
    return matrix;
}

/*
    References used:
    https://stackoverflow.com/questions/18163234/declare-an-empty-two-dimensional-array-in-javascript
    https://stackoverflow.com/questions/15218448/get-index-of-a-key-in-json
*/
