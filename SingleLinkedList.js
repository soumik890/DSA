class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null, length = 0, tail = null) {
    this.head = head;
    this.length = length;
    this.tail = tail;
  }

  push(val) {
    //Add to tail
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    //Remove from tail
    if (this.head == null) {
      return;
    } else {
      let temp = this.head;
      let pre = this.head;
      while (temp.next !== null) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }

  unshift(val) {
    //Add to head
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
  }

  shift() {
    //remove from head
    if (this.head == null) {
      return;
    } else {
      this.head = this.head.next;
    }
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
  }

  get(index) {
    // get the value at index
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp;
    }
  }

  set(index, val) {
    // set the value at particular index
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }

      temp.val = val;
    }
  }

  insert(index, val) {
    //insert a new node at particular index
    if (index == 0) return this.unshift(val);
    if (index == this.length) return this.push(val);
    if (index < 0 || index > this.length) return "invalid index";

    const newNode = new Node(val);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}
const ll = new LinkedList();
ll.push(4);
ll.push(12);
ll.unshift(10);
// ll.shift();
// ll.pop();
// ll.set(1, 5890);
ll.insert(1, 599210);
// ll.insert(4, 1500);
// ll.insert(0, 8988);
// ll.remove(1);
ll.reverse();

console.log(ll);
// console.log(ll.get(2));
