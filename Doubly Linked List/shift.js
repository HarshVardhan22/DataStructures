//*******To remove From Begining*****/
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

    shift(){
        if(this.head===null)
            return null;
        let temp = this.head;
        temp = temp.next;
        this.head = temp;
        this.head.prev = null;
        this.length--
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

console.log(list);
list.shift();
console.log(list);