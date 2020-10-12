//*********To remove from end */
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL{
    constructor(){
        this.head= null;
        this.tail = null;
        this.length = 0;
    }

    pop(){
        if(this.head===null)
            return null;
        let temp = this.tail.prev;
        temp.next = null;
        this.tail = temp;
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
    } 
}

let list = new DoublyLL;
for(let i= 0; i<5;i++)
list.push(i);

console.log(list);
list.pop();
console.log(list);