class Node {
    constructor(data) {
       this.data = data;
       this.next = null;
    }
 }
 class LinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    
    // function to add data to linked list
    add(data) {
       const newNode = new Node(data);
       if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
       } 
       else {
          this.tail.next = newNode;
          this.tail = newNode;
       }
       this.length++;
       return this;
    }
    
    // function to remove data from linked list
    remove(data) {
       if (!this.head) {
          return null;
       }
       if (this.head.data === data) {
          this.head = this.head.next;
          this.length--;
          return this;
       }
       let current = this.head;
       while (current.next) {
          if (current.next.data === data) {
             current.next = current.next.next;
             this.length--;
             return this;
          }
          current = current.next;
       }
       return null;
    }
    
    // function to remove from a particular index 
       removeAt(index) {
       if (index < 0 || index >= this.length) return null;
       if (index === 0) return this.remove();
       let current = this.head;
       for (let i = 0; i < index - 1; i++) {
          current = current.next;
       }
       current.next = current.next.next;
       this.length--;
       return this;
    }
    
    // this function is used to iterate over the entire linkedlist and print it
    printAll() {
       let current = this.head;
       while (current) {
          console.log(current.data);
          current = current.next;
       }
    }
 }
 const list = new LinkedList();