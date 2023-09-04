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

    // function preOrder(root) {
    //   let visited = [],
    //   current = root;
      
    //   let traverse = root => {
    //       visited.push(root.data);
    //       if (root.left) traverse(root.left);
    //       if (root.right) traverse(root.right);
    //   };
      
    //   traverse(current);
    //   console.log(...visited);
    // }
      
}