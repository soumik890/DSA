class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
  }

  push(val) {
    // Add to tail
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    //Remove from tail
    if (this.head == null) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
    }
  }

  unshift(val) {
    // Add to head
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      temp.prev = this.head;
    }
    this.length++;
  }
}

const ll = new DoublyLinkedList();
// ll.push(3);
ll.push(190);
ll.push(488);
ll.unshift(997);
ll.pop();
console.log(ll);
