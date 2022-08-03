// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }
  // FILO - First in Last Out
  push(data) {
    this.data.push(data);
  }

  pop(data) {
    return this.data.pop(data, 0);
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// const newStack = new Stack();
// newStack.push(1);
// newStack.push(3);
// newStack.push(5);

// Since 5 is last in, it comes out first
// Like putting in Pringles in and out of its container
// console.log(newStack.peek());

module.exports = Stack;
