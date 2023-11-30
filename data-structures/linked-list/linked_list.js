class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid Index");
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty, nothing to remove");
      return null;
    } else {
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        let removedNode;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        console.log("Value not found in the list");
        return null;
      }
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    } else {
      let curr = this.head;
      let i = 0;
      while (curr) {
        if (curr.value === value) {
          console.log("Value found");
          return i;
        } else {
          curr = curr.next;
          i++;
        }
      }
      console.log("Value not found");
      return -1;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new linkedList();

list.insert(10, 0);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

list.print();

list.removeFrom(3);
list.removeValue(10);

list.print();

list.reverse();

list.print();