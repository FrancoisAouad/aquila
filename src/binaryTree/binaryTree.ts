export class binaryTree<T> {
    protected value: T;
    protected left: any;
    protected right: any;

    constructor(value: any, left: binaryTree<T>, right: binaryTree<T>) {
        this.value = value;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
    //get the value of the current node
    getValue = (root: binaryTree<T>): any => root.value;
    //get the left node
    getLeft = (root: binaryTree<T>) => root.left;
    //get the right node
    getRight = (root: binaryTree<T>) => root.right;
    //method to set value for the node
    setValue = (value: T) => (this.value = value);
    //function to check if leaf node is a leaf
    isLeaf = (root: any): boolean => root.left == null && root.right == null;
    //method to print values within a certain range
    printRange = (root: binaryTree<T>, low: number, high: number) => {
        if (!root) return;
        if (high < this.getValue(root)) {
            this.printRange(this.getLeft(root), low, high);
        }
        if (low <= this.getValue(root) && high >= this.getValue(root)) {
            console.log(this.getValue(root), ' ');
        }
        if (high > this.getValue(root)) {
            this.printRange(this.getRight(root), low, high);
        }
    };
    //function that returns true or false if a value is found inside the tree
    search = (root: binaryTree<T>, target: T): boolean => {
        if (!root) return false;
        if (this.getValue(root) === target) return true;
        return this.search(this.getLeft(root), target) && this.search(this.getRight(root), target);
    };
    //return height of binary tree
    height = (root: binaryTree<T>): number => {
        if (!root) return 0;
        return 1 + this.height(this.getLeft(root));
        return 1 + this.height(this.getRight(root));
    };
    //returns how many leaf nodes there are
    countLeaf = (root: binaryTree<T>): number => {
        if (!root) return 0;
        if (this.getLeft(root) === null && this.getRight(root) === null) return 1;
        return this.countLeaf(this.getLeft(root)) + this.countLeaf(this.getRight(root));
    };
    //returns sum of all node in the tree
    sumNode = (root: binaryTree<T>): number => {
        if (!root) return 0;
        return (
            this.sumNode(this.getValue(root)) +
            this.sumNode(this.getLeft(root)) +
            this.sumNode(this.getRight(root))
        );
    };
    //print multiple of the target number
    printMultiple = (root: binaryTree<T>, target: number): void => {
        if (!root) return;
        if (this.getValue(root) % target === 0) {
            console.log(this.getValue(root), ' ');
        }
        this.printMultiple(this.getLeft(root), target);
        this.printMultiple(this.getRight(root), target);
    };
    //check if a tree is full
    isFull(root: binaryTree<T>): boolean {
        if (!root) return true;
        if (
            (this.getLeft(root) === null && this.getRight(root) !== null) ||
            (this.getLeft(root) !== null && this.getRight(root) === null)
        )
            return false;
        return this.isFull(this.getLeft(root)) && this.isFull(this.getRight(root));
    }
    deleteNode = () => {};
    findNode = (root: binaryTree<T>, target: T): any => {
        if (!root) {
            return;
        }
    };
}
