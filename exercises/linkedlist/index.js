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

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    
    while(node) {
      if (!node.next) {
        return node;
      }
      
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    // let newHead = this.head.next;
    // delete this.head;
    // this.head = newHead;

    // better solution with no delete
    this.head = this.head.next;
  }

  removeLast() {
    // if there is no node
    if(!this.head) {
      return;
    }
    // if the second node doesn't exist
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    // how this works is it keeps iterating while there is a node
    while (node.next) {
      // it then assigns prev node to the current node
      prev = node;
      // then sets the current node to the next
      // loops until current node is set to null (last)
      node = node.next;
    }
    // once the current node is at the end (null)
    // instead of deleting we're overwriting to null
    prev.next = null;
  }

  insertLast (data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while(node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    // ensure there is a head else create one with the data
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    // handles edge case of inserting at index 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // grab previous node to insert data in front of it
    // also handles where index is out of bound by grabbing last
    const prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    // insert next node after previous node
    prev.next = node;
  }

  forEach() {
    let node = this.head

    while(node) {
      node.data += 10;
      node = node.next;
    }
  };
}

module.exports = { Node, LinkedList };
