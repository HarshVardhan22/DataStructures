//**********To Remove an item at an index */

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
    
    remove(index){
         if(index>this.length||index<0) return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();

        let removeNode = this.get(index);
        let beforeNode = removeNode.prev;
        let afterNode = removeNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
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

    get(index){
        if(index>=this.length||index<0)
            return undefined;
        if(this.head ===null)
            return null;
        if(index<=Math.floor(this.length/2)){
            let temp =this.head;
            while(index>=1){
                temp = temp.next;
                index--;
            }
            return temp;
        }

        else{
            let temp =this.tail;
            while(this.length-index>1){
                temp = temp.prev;
                index++;
            }
            return temp.val;
        }
      

    }

    pop(){
        if(this.head===null)
            return null;
        let temp = this.tail.prev;
        temp.next = null;
        this.tail = temp;
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
}

let list = new DoublyLL;
for(let i= 0; i<5;i++)
list.push(i);
list.remove(1)
console.log(list);






