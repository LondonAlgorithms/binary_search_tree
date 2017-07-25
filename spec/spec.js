describe('Binary Search', function(){
  context('Insertion', function(){
    context('When there is only one element in list', function(){
      it('the inserter creates a binary tree with just a root', function(){
        var bst = tree_builder([10]);

        expect(bst.root.value).to.eql(10);
        expect(bst.root.left).to.eql(null);
        expect(bst.root.right).to.eql(null);
      });
    });

    context('When there is 3 elements in list', function(){
      it('the inserter creates a binary tree with a root and 2 leafs', function(){
        var bst = tree_builder([10, 14, 2]);

        expect(bst.root.value).to.eql(10);
        expect(bst.root.left.value).to.eql(2);
        expect(bst.root.right.value).to.eql(14);
      });
    });

    context('When there many elements in list, the structure gets interesting', function(){
      it('the inserter creates a binary tree', function(){
        var unordered = [10, 12, 5, 4, 20, 8, 7, 15, 13];
        var bst = new BinarySearchTree();
        unordered.forEach(function(element) {
          bst.push(element);
        });

        // tree root (10)
        expect(bst.root.value).to.eql(10);

        //                      10
        //                          12
        expect(bst.root.right.value).to.eql(12);
        //                      10
        //                  5        12
        expect(bst.root.left.value).to.eql(5);
        //                      10
        //                  5        12
        //               4
        expect(bst.root.left.left.value).to.eql(4);
        //                      10
        //                  5        12
        //               4              20
        expect(bst.root.right.right.value).to.eql(20);
        //                      10
        //                  5        12
        //               4    8        20
        expect(bst.root.left.right.value).to.eql(8);
        //                      10
        //                  5        12
        //               4    8        20
        //                  7
        expect(bst.root.left.right.left.value).to.eql(7);
        //                      10
        //                  5      12
        //               4    8       20
        //                  7       15
        expect(bst.root.right.right.left.value).to.eql(15);
        //                      10
        //                  5      12
        //               4    8       20
        //                  7       15
        //                       13
        expect(bst.root.right.right.left.left.value).to.eql(13);
      });
    });
  });

  context('Search', function(){
    context('When the node exists in the tree', function(){
      it('the function returns true', function(){
        var unordered = [10, 12, 5, 4, 20, 8, 7, 15, 13];
        var bst = tree_builder(unordered);

        expect(bst.search(13)).to.eql(true);
      });
    });

    context('When the node doesnt exist in the tree', function(){
      it('the function returns false', function(){
        var unordered = [10, 12, 5, 4, 20, 8, 7, 15, 13];
        var bst = tree_builder(unordered);

        expect(bst.search(21)).to.eql(false);
      });
    });


    context('When the tree is empty', function(){
      it('the function returns false', function(){
        var bst = tree_builder([]);

        expect(bst.search(21)).to.eql(false);
      });
    });
  });

  context('Get Min', function(){
    it('the function returns the min value in the tree', function(){
      var unordered = [10, 12, 5, 4, 20, 8, 7, 15, 13];
			var bst = tree_builder(unordered);

      expect(bst.getMin()).to.eql(4);
		});
	});

  context('Get Max', function(){
    it('the function returns the max value in the tree', function(){
      var unordered = [20, 10, 12, 5, 4, 8, 7, 15, 13];
			var bst = tree_builder(unordered);

      expect(bst.getMax()).to.eql(20);
		});
	});
});
