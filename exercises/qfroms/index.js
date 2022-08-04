// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// Stack is first record in, last record out
// We don't want this behavior
const Stack = require('./stack');
// Que is first in, first out
class Queue {
  constructor() {
    // creating an instance of a Queue will generate two stacks
    this.first = new Stack();
    this.second = new Stack();
  }

  add (record) {
    this.first.push(record);
  }

  remove() {
    // move everything to second stack
    while (this.first.peek()) {
      const record1 = this.first.pop();
      this.second.push(record1);
    }

    const output = this.second.pop();
    // move remaining record back to stack 1
    while (this.second.peek()) {
      const record2 = this.second.pop();
      this.first.push(record2);
    }
    // return the desired value;
    return output;
  }

  peek () {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
