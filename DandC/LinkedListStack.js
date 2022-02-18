class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    push(data){
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        ++this.length;
    }
    pop(){
        if(!this.head) console.log("Stack Underflow!");
        this.head = this.head.next;
        --this.length;
    }

    peek(){
        return this.head.data;
    }

    getLength(){
        return this.length;
    }

    printStack(){
        let current  =this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new LinkedListStack();
list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.push(1);
console.log("After push:");
list.printStack();
list.pop();
list.pop();
console.log("After pop:");
list.printStack();
console.log("Peek:");
console.log(list.peek());
console.log("Length:");
console.log(list.getLength());
console.log("Print Final Stack:");
list.printStack();