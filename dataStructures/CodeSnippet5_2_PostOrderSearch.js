class BinarySearchTree {

    //other code

    postOrder() {
        let visited = [],
            current = this.root;
      
        let traverse = node => {
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
          visited.push(node.val);
        };
      
        traverse(current);
        return visited;
      }
      
}