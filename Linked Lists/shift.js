//remove from begining
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

  shift() {
    if (this.head.next === null || this.head.next.next === null)
      return undefined;
    let temp = this.head.next;
    let firstItem = this.head;
    this.head = temp;
    firstItem.next = null;
    this.length--;
  }
}

/* Testing Code
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);

list.shift();

console.log(list);

*/


