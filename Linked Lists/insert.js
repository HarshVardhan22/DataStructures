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

  insert(index, newValue) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return !!this.unshift(newValue);
    if (index === this.length) return !!this.push(newValue);
    let temp = this.head;
    let count = 1;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    let newNode = new Node(newValue);
    newNode.next = temp.next.next;
    temp.next = newNode;
    this.length++;
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
  unshift(val) {
    if (this.head === null) return undefined;
    let newNode = new Node(val);
    let temp = this.head;
    newNode.next = temp;
    this.head = newNode;
    this.length++;
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

list.insert(-1,94);

console.log(list);

