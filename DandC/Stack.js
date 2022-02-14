export default class Stack{
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
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    isEmpty(){
        if(this.stack.length==0){
            console.log("Stack is empty");
            return;
        }
    }
    getLength(){
        return this.stack.length;
    }
    printStack(){
        let i=0;
        while(i<this.stack.length){
            console.log("Element no.",i+1,":",this.stack[i]);
            i++;
        }
    }
}


