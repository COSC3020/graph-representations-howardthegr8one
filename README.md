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
I've concluded that the runtime for my implementation is $O(E^2)$. In a worst-case scenario
the runtime is the same but in a best-case scenario the runtime would be $O(E)$. In a best-case
scenario there would only be a single node that connects to itself, but even in a situation with multiple 
nodes that still only connect to themselves or have one connection to one other node then every node only
has at most one element to consider. This means that even though we have nested for loops, the inner loop
would run in constant time as it merely checks a single element, thus the best-case runtime is simply
the number of edges (or the number of vertices as in this case that number would be the same). in the
average and worst-case scenarios each node would have at least if not more than one node it's connected
to, meaning that in these situations the inner for loop would run more than once. 

Essentially in a non-best-case scenario the outer loop iterates V (vertices) times, the inner loop will
iterate 1 to E times for the given vertex, but the indexOf() function is also called during the inner 
loop meaning that it will iterate through the keys of the graph, so the runtime of the inner loop is 
actually E for the given vertex plus up to V for the indexOf() call, so the inner loop's runtime is
$O(E + E*E)$. Therefore the total runtime of the implementation is $O(E^2)$



