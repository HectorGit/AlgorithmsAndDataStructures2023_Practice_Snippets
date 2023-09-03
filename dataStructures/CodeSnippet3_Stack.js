class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    }
    // push function 
push(element) 
{ 
	// push element into the list items 
	this.items.push(element); 
} 
// pop function 
pop() 
{ 
	if (this.items.length == 0) 
		return "Underflow"; 
	return this.items.pop(); 
} 

// isEmpty function 
isEmpty() 
{ 
	// return true if stack is empty 
	return this.items.length == 0; 
} 

// peek function 
peek() 
{ 
	return this.items[this.items.length - 1]; 
} 

}

// defining a new stack
var mystack = new Stack()