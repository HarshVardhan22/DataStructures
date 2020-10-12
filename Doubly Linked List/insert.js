//************to insert at a given index */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL{
    constructor(){
        this.head =null;
        this.tail =null;
        this.length = 0;
    }

    insert(index,val){
        
        if(index>this.length||index<0) return undefined;
        if(index===0) return this.unshift();
        if(index===this.length-1) return this.push();

        
        if(index<Math.floor((this.length)/2)){
            let temp = this.head;
            while(index>1){
                temp = temp.next;
                index--;
            }
             let newNode = new Node(val);
             newNode.next = temp.next;
             newNode.prev = temp;
             temp.next.prev = newNode;
             temp.next = newNode;

        }

        else{
            let temp = this.tail;
            while(this.length-index>0){
                temp = temp.prev;
                index++
            }
            let newNode = new Node(val);
             newNode.next = temp.next;
             newNode.prev = temp;
        }

        this.length++;
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
        if(this.head === null){
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

}

let list = new DoublyLL;
for(let i = 0 ; i<10; i++)
    list.push(i);

list.insert(3,555);

console.log(list);