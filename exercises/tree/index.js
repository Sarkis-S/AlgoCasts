// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add (data) {
    // const node = new Node(data);
    // this.children.push(node);
    this.children.push(new Node(data));
  }

  remove (data) {
    // deletes nodes that doesn't equal the data and then reassigns it to this.children
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // initialize array with empty root
    const array = [this.root];

    while(array.length) {
      // remove head node
      const node = array.shift();
      // push it's children into BACK of array
      array.push(...node.children);
      // apply the function to head node;
      fn(node);
    }
  }

  traverseDF (fn) {
    // initialize array with empty root
    const array = [this.root];

    while(array.length) {
      // grab the head[0] node breaking it away from array
      const node = array.shift();
      // add child element to the FRONT of the array
      array.unshift(...node.children);
      // apply the fn to the head node
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
