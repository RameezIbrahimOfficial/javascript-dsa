class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(value) {
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

    pop() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            let value = this.head.value;
            this.head = null;
            return value;
        } else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            let value = curr.next.value;
            curr.next = null;
            return value;
        }
    }

    display() {
        let result = '';
        let curr = this.head;
        while (curr) {
            result += `${curr.value} `;
            curr = curr.next;
        }
        console.log(result);
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        while (this.stack1.head) {
            this.stack2.push(this.stack1.pop());
        }
        if (!this.stack2.head) {
            console.log("Queue is empty");
            return null;
        }
        let dequeuedValue = this.stack2.pop();
        while (this.stack2.head) {
            this.stack1.push(this.stack2.pop());
        }
        return dequeuedValue;
    }
    

    display() {
        this.stack1.display();
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
queue.dequeue();
queue.dequeue();
queue.display()