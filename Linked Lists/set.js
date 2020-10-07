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

  set(index,update) {
    if (this.head === null) return undefined;
    let temp = this.head;
    let count = 0;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    temp.value = update;
  }
}

var list = new LinkedList();
/*
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);

list.set(3,94);

console.log(list.get(3));
*/
