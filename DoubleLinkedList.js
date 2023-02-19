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

  shift() {
    //remove from head
    if (this.length == 0) {
      return undefined;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
  }

  get(index) {
    // get node at the index

    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      console.log("else called");
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, val) {
    //set value at particular index
    let location = this.get(index);
    if (location) {
      location.val = val;
    }
  }

  insert(index, val) {
    if (index == 0) {
      return this.unshift(val);
    }

    if (index == this.length) {
      return this.push(val);
    }

    if (index < 0 || index > this.length) {
      return false;
    }

    let newNode = new Node(val);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    newNode.prev = temp;
    this.length++;
  }

  remove(index) {
    // remove at particular index
    if (index == 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }

    let location = this.get(index);
    location.prev.next = location.next;
    location.next.prev = location.prev;
    location.next = null;
    location.prev = null;
    this.length--;
  }
}

const ll = new DoublyLinkedList();
// ll.push(3);
ll.push(190);
ll.push(488);
ll.push(6674);
// ll.unshift(997);
ll.unshift(1888);
// ll.pop();
// ll.shift();
// console.log(ll.get(2));
// ll.set(2, 89765);
ll.insert(2, 9009);
ll.remove(2);
console.log(ll);
