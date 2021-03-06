//*******To search a given index*****/

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
            return temp.val;
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
for(let i= 0; i<100;i++)
list.push(i);


console.log(list.get(99));