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

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst(data) {
    // create a new Node and assign the current node to new Node's next value
    // const node = new Node(data, this.head);
    // now re-assign the head to point at new Node
    // this.head = node;
    // one line code equivalent:
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    // check if there is a node currently
    while (node) {
      counter++;
      // assign the next node to node variable for checking
      node = node.next;
    }

    return counter;
  }
}


module.exports = { Node, LinkedList };
