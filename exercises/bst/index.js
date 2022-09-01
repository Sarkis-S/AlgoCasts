// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // checks head value vs incoming value and if there is a node to the left of head
    if (data < this.data && this.left) {
      // if so apply recursion to the left until last node
      this.left.insert(data);
      // if this is the last node (left)
    } else if (data < this.data) {
      // then create node with data (left)
      this.left = new Node(data);
    // checks head value vs incoming value and if there is a node to the right of head
    } else if (data > this.data && this.right) {
      // if so apply recursion to the right until last node
      this.right.insert(data);
      // if this is the last node (right)
    } else if (data > this.data) {
      // create node with data (righ)
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this; // return node
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
