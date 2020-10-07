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
      let temp = this.tail;
      let hook = this.head;
      let reverseLoop = 0
      let forwardLoop = this.length;
      while(reverseLoop!==this.length){
      while(forwardLoop+1+reverseLoop>1){
          hook = hook.next;
          forwardLoop--;
      }
      temp.next = hook;
      hook = this.head;
      reverseLoop++;
    }


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

 //Testing Code

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);


