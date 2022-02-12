class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    add(data){
        let node = new Node(data);
        let current = this.head;
        if(!current){
            this.head = node;
        }
        else{
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        ++this.length;
    }

    insertAt(data,index){
        let current = this.head;
        let node = new Node(data);
        if(index===1){
            node.next=current;
            this.head = node;
        }
        else{
            let i=1;
            while(i<index-1){
                current = current.next;
                i++;
            }
            let temp = current.next;
            current.next = node;
         
            node.next = temp;
        }
        ++this.length;
    }

    removeFrom(index){
        let current = this.head;
        if(index===1){
            this.head = current.next;
        }
        else{
            let i=1;
            while(i<index-1){
                current = current.next;
                i++;
            }
            let temp = current.next.next;
            current.next = temp;
        }
        --this.length;
    }
    removeElement(element){
        let current = this.head;
        if(current.data===element){
            this.head = current.next;
        }
        else{
            while(current.next){
                if(current.next.data===element){
                    current.next = current.next.next;
                }
                else{
                    current = current.next;
                }
            }

        }
        --this.length;
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    getSecondLastNode(){
        let current = this.head;
       while(current.next.next){
           current = current.next;
       }
        console.log("Second last element:",current.data);
    }
    appendLastToFirst(){
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        let last = current.next;
        current.next = null;
        last.next = this.head;
        this.head = last;
    }
    addBefore(x,y){
        let current = this.head;
        let node = new Node(x);
        if(!current) return;
        if(current.data===y){
            node.next = current;
            this.head=node;
        }
        else{
            while(current.next){
                if(current.next.data===y){
                    let temp = current.next;
                    current.next = node;
                    node.next = temp;
                }
                    current = current.next;
            }
        }
        ++this.length;
    }
    deleteFromLast(){
        let current = this.head;
        if(!current) return;
        if(!current.next) {
            this.head = null;
            --this.length;
            return;
        }
        while(current.next.next) current = current.next;
        current.next = null;
        --this.length;
    }
    findMiddleElement(){
        let p = this.head;
        let q = p;
        while(q && q.next && q.next.next){
            p = p.next;
            q = q.next.next;
        }
        console.log("Middle element:",p.data);
    }
    reverseLinkedList(){
       let prev = null;
        let current = this.head;
        if(!current) return;
        let next = current.next;
        while(next){
            current.next = prev;
            prev = current;
            current = next;
            next = current.next;
        }
        current.next = prev;
        this.head = current;
    }
}

let list  = new LinkedList()

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.insertAt(20,1);
list.insertAt(30,2);
list.removeElement(30);
list.removeFrom(3);
list.getSecondLastNode();
list.appendLastToFirst();
list.addBefore(23,3);
list.deleteFromLast();
list.findMiddleElement();
list.display();
list.reverseLinkedList();
list.display();