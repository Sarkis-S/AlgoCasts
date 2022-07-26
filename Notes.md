# Algorithms / Runtime Complexity

Constant Time => 1 => No matter how many elements is being worked with, the algorithm/operation will always take the same amount of time

Logarithmic Time => log(n) => If doubling the number of elements that are iterating over doesn’t double the amount of work. Assume that searching operations are log(n)

Linear Time => n => Iterating through all elements in a collection of data. If running into a loop spanning from 0 to array length, this probably have n or linear runtime

Quasilinear Time => n * log(n) => True if doubling the number of elements iterating over doesn’t double the amount of work. Assume any sorting operation is n * log(n)

Quadratic Time => n ^ 2 => Every element in a collection has to be compared to every other element. The handshake problem.

Exponential Time => 2 ^ n => If adding a single element to a collection, the procession power required doubles


# Big O Notation examples:

O(n) => Linear 
O(1) => Constant
O(n ^ 2) => Quadratic

Practice:

Iterating with a simple for loop through a single collection?
	=> Probably O(n)
Iterating through half a collection?
	=> Still O(n). There are no constants in runtime
Iterating through two different collections with separate for loops?
	=> O(n + m)
Two nested for loops over the same collection?
	=> O(n ^ m)
Two nested for loops iterating over different collections?
	=> O(n * m)
Sorting algorithms
	=> O(n * log(n))
Searching a sorted array?
	=> O (log(n))