class Queue{
    constructor(){
       this.items = [];
    }

    enqueue(data){
      this.items.push(data);
    }

    dequeue(){
       if(this.isEmpty()) return "Queue Underflow!";
       let el = this.items.shift();
       return el;
    }
    isEmpty(){
        return this.items.length<1?true:false;
    }
    front(){  //same as peek returns top element.
        if(this.isEmpty()) return "No elements in Queue.";
        return this.items[0];
    }

    printQueue(){
       let i=0;
       while(i<this.items.length){
           console.log(i,". ",this.items[i]);
           i++;
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
console.log("Front element",queue.front());
console.log("Dequeued element:",queue.dequeue());
console.log("Dequeued element:",queue.dequeue());
console.log(queue.dequeue());
