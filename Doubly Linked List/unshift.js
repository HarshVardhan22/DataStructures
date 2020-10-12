//*******To add in Begining*****/
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

    unshift(val){
        if(this.head===null)
            return this.push(val);
        let newNode = new Node(val);
        let temp = newNode;
        temp.next = this.head;
        this.head = temp;
        this.length++;
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
list.unshift(99);
console.log(list);