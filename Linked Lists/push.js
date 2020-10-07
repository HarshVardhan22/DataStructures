class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        let newNode = new Node(val);
        if(this.head===null){
            this.head = newNode;
            this.tail = this.head;
        }

        else {
            this.tail = newNode;
            //if(this.head.next===null)
            this.tail.next = newNode;
        }
            this.length++;
            return this;
    }

    pop(){
        let temp = this.head;
        let x = this.tail.value;
        console.log(x);
        if(this.head === null)
        return undefined;
        while(temp !== null)
            temp = temp.next;
        this.tail = temp;
        this.length--;
        return x;    
    }
}

var list =new LinkedList;
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.pop();
console.log(list);
console.log("Head is at "+ list.head.value);
console.log("Tail is at " + list.tail.value);
