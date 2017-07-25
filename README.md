# The Binary Search Tree Algorithm

Binary search trees are one of the fundamental data structures you learn about when you pick up a data structures text book.
I picked this for my presentation because binary search tree are a great structure to visualise and the implementation is possible using basics such as `IF/ELSE` and `WHILE`.

Before you get started on the exercises my favourite demo of the algorithm is [here](http://btechsmartclass.com/DS/U5_T1.html).

## Exercises

The exercises I have created give you specs to guide you through creating a binary search tree and then searching that tree for a value.

I have written some [Javascript tests](https://github.com/LondonAlgorithms/binary_search_tree/blob/master/spec/spec.js), you can run them by opening `SpecRunner.html`.

1. Create a Binary Search Tree by filling out the body of the `push` function.

    This exercise has 2 versions:

      - [The first gives you hints and asks you to fill the blanks in.](https://github.com/LondonAlgorithms/binary_search_tree/blob/master/src/binary_search_tree.js)

         Note: You need to copy the logic from the file given into `binary_search_tree.js` so the specs can see the function you create.

      - [The second version only gives you the code skeleton so you need to completely implement the algorithm.](https://github.com/LondonAlgorithms/binary_search_tree/blob/master/src/binary_search_tree.js)

2. Search a Binary tree to see if a value exists in the tree.

        Hint: see if you can use the code from the `push` function.

3. Implement the `getMin()` function to return the smallest value in the tree.

        Hint: Remember Binary trees store their smallest values on the left leaf.

4. Implement the `getMax()` function to return the largest value in the tree.

        Hint: Remember Binary trees store their largest values on the right leaf.

5. Create the `delete` function or maybe attempt to optimize the code!
