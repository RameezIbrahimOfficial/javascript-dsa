class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
    }

    enqueue(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
    }

    dequeue() {
        let curr = this.head;
        if (!this.head) {
            return null;
        } else {
            this.head = curr.next;
            return curr.value;
        }
    }

    display() {
        let result = '';
        let curr = this.head;
        while (curr) {
            result += `${curr.value} `;
            curr = curr.next
        }
        console.log(result);
    }
}

class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(value) {
        this.queue1.enqueue(value)
    }

    pop() {
        while (this.queue1.head) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
        
        this.queue1.dequeue();
    }
    

    display() {
        this.queue1.display();
    }
}


let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.display();
stack.pop();
stack.pop();
stack.display();