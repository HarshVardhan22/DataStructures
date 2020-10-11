//reversing the given list

/******************UNDER DEVELOPEMENT********/

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

  reverse(){
      let temp = this.head;
      let jack = this.head;
      while(temp.next!==null)
        temp = temp.next;
      let head = temp;
      let end  = 1;
      while(end<this.length){
        while(jack.next.next!==null)
          jack = jack.next;
        jack.next = null;
        temp.next = jack;
        temp = jack;
        jack = this.head;
        end++;
      }
      this.head = head;
      this.tail = temp;
    
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
}

var list = new LinkedList();

 //Testing Code
// list.push(0);
// list.push(1);
// list.push(2);
// list.push(3);
// console.log(list);
// list.reverse();




