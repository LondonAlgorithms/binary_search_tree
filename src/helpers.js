var tree_builder = function tree_builder(unordered_tree) {
  var bst = new BinarySearchTree();

  unordered_tree.forEach(function(element) {
    bst.push(element);
  });

  return bst;
}
