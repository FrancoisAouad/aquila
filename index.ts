// export { stack } from './src/stack/stack';
// export { binaryTree } from './src/binaryTree/binaryTree';
// export { queue } from './src/queue/queue';
// export { list } from './src/list/list';
// export { binarySearchTree } from './src/BST/bst';
// export * from './src/sorting/sorting';

const t: Array<number> = [1, 1, 2, 3, 3, 3, 4, 4, 5];

t.slice(0, t.length, ...new Set<null>(t));
