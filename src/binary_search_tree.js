/**
 * Describe the function to be implememeted.
 * Ideally it be a pure function.
 *
 * @param {type} val1 description of the argument
 * @param {type} val2 description of the argument
 *
 * @return {type} description of the return value
 */

function BinarySearchTree(){
  this.root = null;
}

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}


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
         currentNode.left = newNode;
         break;
       } else {
         currentNode = currentNode.left;
       }
     } else {
       if (!currentNode.right) {
         currentNode.right = newNode;
         break;
       } else {
         currentNode = currentNode.right;
       }
     }
  }

}

BinarySearchTree.prototype.search = function(value){
 var root = this.root;

 if(!root){
    this.root = new Node(value);
    return;
 }

   var currentNode = root;

	while(currentNode){
    if (currentNode.value == value) {
      return true;
    }

    if(value <= currentNode.value){
      currentNode = currentNode.left;
    } else{
      currentNode = currentNode.right;
    }
  }

  return false;
};

BinarySearchTree.prototype.getMin = function(){
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  };

  return current.value;
};

BinarySearchTree.prototype.getMax = function(){
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  };

  return current.value;
};
