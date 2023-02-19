class Item {
  constructor(value, next = 0) {
    this.value = value;
    this.next = next;
  }
}

class stack {
  constructor(top = null, length = 0) {
    this.top = top;
    this.length = length;
  }

  push(value) {
    //push value to top of the stack
    let newItem = new Item(value);
    let temp = this.top;
    this.top = newItem;
    this.top.next = temp;
    this.length++;
  }

  pop() {
    //pop value from top of the stack
    if (this.length == 0) {
      return undefined;
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length--;
  }
}

const st = new stack();
st.push(5);
st.push(10);
st.pop();

console.log(st);
