// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const midpoint = (list) => {
  // slow will move from node to node
  // fast will move 2 nodes at a time
  let slow = list.head;
  let fast = list.head;
  // check to see if there are two nodes in front of fast every iteration
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // if there isn't we can say slow is at the midpoint
  return slow;
}

module.exports = midpoint;
