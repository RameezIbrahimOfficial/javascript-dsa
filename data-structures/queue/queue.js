class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node
        }
    }

    dequeue(){
        if(!this.first){
            return null;
        } else {
            this.first = this.first.next 
        }
    }

    print(){
        let curr = this.first;
        let result = '';
        while(curr){
            result += `${curr.value} `;
            curr = curr.next;
        }
        console.log(result);
    }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.print()
q.enqueue(50)
q.dequeue()
q.print()