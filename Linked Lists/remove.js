//deletes an item at a given index

//returns the index item with updated value

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  remove(index) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return !!this.shift();
    if (index + 1 === this.length) return !!this.pop();
    let temp = this.head;
    let count = 1;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    let toDelete = temp.next;
    temp.next = toDelete.next;
    toDelete.next = null;
    this.length--;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    let temp = this.head;
    let lastItem = this.tail;
    while (temp.next.next !== null) temp = temp.next;
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.head.next === null || this.head.next.next === null)
      return undefined;
    let temp = this.head.next;
    let firstItem = this.head;
    this.head = temp;
    firstItem.next = null;
    this.length--;
  }

  get(index) {
    if (this.head === null) return undefined;
    let temp = this.head;
    let count = 0;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    return temp.value;
  }
}

var list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);

list.remove(5);

console.log(list);

