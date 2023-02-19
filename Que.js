class Item {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Que {
  constructor(first = null, last = null) {
    this.first = first;
    this.last = last;
  }
}

//add to tail is O(1) known as enque in ques
