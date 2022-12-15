import { binaryTree } from '../binaryTree/binaryTree';

export class binarySearchTree<T> extends binaryTree<T> {
    protected value: any;
    protected left: any;
    protected right: any;
    constructor(value: T, left: any = null, right: any = null) {
        super(value, left, right);
    }
}
