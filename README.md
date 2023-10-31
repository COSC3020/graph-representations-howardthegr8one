[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12359350&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above.

## My runtime analysis for my implementation:

The runtime for my implmentation is $O(V^2)$ because in order to initialize the adjacency matrix I must
iterate through all of the nodes (vertices) of the given graph to create columns for each vertex as well
as iterate through all of the vertices to create the rows of the matrix, resulting in $O(V^2)$ for the 
matrix initialization. The rest of the algorithm merely iterates over the vertices again, and each edge 
of each vertex, resulting in a runtime of $O(E + V)$. Therefore in an average and worst-case scenario 
the runtime of my implementation is $O(E + V + V^2)$ or $O(V^2)$

However in a best-case scenario we would only have a single node that has no connections, in which case
the runtime would be $O(V)$ since there are no edges or other nodes to consider. Although in practice I can't
imagine ever coming across a graph like this. 



