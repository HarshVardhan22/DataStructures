//returns the index item

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

  get(index) {
    if (this.head === null) return undefined;
    let temp = this.head;
    let count = 0;
    //4rth item means 3 next : head.next.next.next = 4rth item or 3rd index item
    while (count < index) {
      temp = temp.next;
      count++;
    }
    return temp.value;
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

var list = new LinkedList();

for(let i =0 ; i<100; i++)
list.push(i);

console.log(list.get(3));


