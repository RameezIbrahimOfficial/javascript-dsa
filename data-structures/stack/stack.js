class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(value){
        let node = new Node(value);
        if(!this.top){
            this.top = node;
        } else {
            let curr = this.top;
            this.top = node;
            this.top.next = curr
        }
    }

    pop(){
        if(!this.top){
            return null
        } else {
            this.top = this.top.next
        }
    }

    print(){
        let curr = this.top;
        let resultStack = '';
        while(curr){
            resultStack += `${curr.value} `;
            curr = curr.next;
        }
        console.log(resultStack);
    }
}

let s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.print()
s.pop()
s.print()