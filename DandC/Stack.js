class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.stack.length<1) {
            console.log("Stack Underflow!");
            return;
        }
        this.stack.pop();
    }
    peek(){
        console.log("Top most element in stack:",this.stack[this.stack.length-1]);
    }
    isEmpty(){
        if(this.stack.length==0){
            console.log("Stack is empty");
            return;
        }
    }
    printStack(){
        let i=0;
        while(i<this.stack.length){
            console.log("Element no.",i+1,":",this.stack[i]);
            i++;
        }
    }
}

let stack = new Stack();
stack.pop();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop();
stack.push(6);
stack.printStack();
stack.peek();