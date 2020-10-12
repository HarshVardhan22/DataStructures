// ************To add at end************

class Node{
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        let newNode = new Node(val);
        if (this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }

        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; 
        }
        this.length++;

    } 
}

let list = new DoublyLL;
for(let i= 0; i<5;i++)
list.push(i);







