class Queue{
    constructor(){
       this.items = [];
       this.front = -1;
       this.rear = -1;
    }

    enqueue(data){
        if(this.front===-1) {this.front = 0; this.rear = 0; }
        else{
            ++this.rear;
        }
        this.items[this.rear] = data; 
    }

    dequeue(){
        if(this.front===-1) {
            console.log("Stack underflow!");  
            return;      
    }
    else if(this.front<this.rear){
        let temp = this.items[this.front];
        ++this.front;
        return temp;
    }
        let temp = this.items[this.front];
        ++this.front;
        this.front = -1;
        this.rear = -1;
        return temp;
    }

    printQueue(){
        let i=this.front;
        while(i<=this.rear){
            console.log(this.items[i]);
            ++i;
        }
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("After enqueue:");
queue.printQueue();
queue.dequeue();
console.log("After one dequeue");
queue.printQueue();
console.log("Dequeued element:",queue.dequeue());
console.log("Dequeued element:",queue.dequeue());
queue.dequeue();