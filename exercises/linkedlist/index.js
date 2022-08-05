// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Most basic LinkedList example:
// const nodeOne = { data: 123 };
// const nodeTwo = { data: 456 };
// nodeOne.next = nodeTwo;
// Linked List can be defined as two separate pieces of data
// with some form of connection between them

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {}

module.exports = { Node, LinkedList };
