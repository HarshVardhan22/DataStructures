//add at the begining
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

  unshift(val) {
    if (this.head === null) return undefined;
    let newNode = new Node(val);
    let temp = this.head;
    newNode.next = temp;
    this.head = newNode;
    this.length++;
  }
}

var list = new LinkedList;

/* Testing Code
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);

list.unshift(94);

console.log(list);

*/