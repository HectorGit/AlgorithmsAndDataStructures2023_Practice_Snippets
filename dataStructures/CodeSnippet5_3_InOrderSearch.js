class BinarySearchTree {

    //other code

    inOrder() {
        let visited = [],
            current = this.root;
      
        let traverse = node => {
          if (node.left) traverse(node.left);
          visited.push(node.val);
          if (node.right) traverse(node.right);
        };
      
        traverse(current);
        return visited;
      }
      

}