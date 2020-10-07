//remove from end
class Node{
    constructor(val){
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
}

var list = new LinkedList;
/*
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);

list.pop();

console.log(list);
*/
