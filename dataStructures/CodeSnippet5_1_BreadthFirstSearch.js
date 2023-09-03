class BinarySearchTree {

    //other code

    BFS() {
        let visited = [],
            queue = [],
            current = this.root;
    
        queue.push(current);
        while (queue.length) {
        current = queue.shift();
        visited.push(current.val);
    
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        };
    
        return visited;
    }

}