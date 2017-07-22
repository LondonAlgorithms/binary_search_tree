function BinarySearchTree(){
  this.root = null;
}

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}


/**
 * The push function adds the numeric parameter to a binary tree.
 * As more elements the tree grows out to form a Binary Search Tree.
 *
 * @param {Numeric} value to be added to the tree
 *
 * @return {Boolean} True or False depending on if there was a failure.
 */

BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val);

   while(currentNode){
     if (val <= currentNode.value) {
       if (!currentNode.left) {
         // assign newNode to the left leaf and then stop iterating.
         // ______ = newNode;
         // ______;
       } else {
         // make currentNode the value of the left side of the node and
         // allow to continue iterating.
         // currentNode = _________;
       }
     } else {
       // recreate logic for the right handside.
     }
  }
};

/**
 * The search function traverses the created binary tree looking for the
 * supplied value.
 *
 * @param {Numeric} value to searched for.
 *
 * @return {Boolean} True or False depending on if the value was found in the
 * tree
 */
BinarySearchTree.prototype.search = function(value){
};
