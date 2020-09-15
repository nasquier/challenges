// https://www.hackerrank.com/challenges/swap-nodes-algo/problem

class Node {
    constructor(data = 1, leftChild = undefined, rightChild = undefined) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
    inOrderTraversal() {
        let arr = [];
        if (this.leftChild !== undefined) {
            arr = arr.concat(this.leftChild.inOrderTraversal());
        }
        arr.push(this.data);
        if (this.rightChild !== undefined) {
            arr = arr.concat(this.rightChild.inOrderTraversal());
        }
        return arr;
    }
    swap() {
        let temp = this.leftChild;
        this.leftChild = this.rightChild;
        this.rightChild = temp;
    }
}

// Return a list of nodes with a depth attribute
function makeTree(indexes) {
    let tree = new Array(indexes.length);
    for (let i = 0; i < indexes.length; i++) {
        tree[i] = new Node();
    }

    let depth = 1;
    let depthCounter = 1;
    let nextDepthCounter = 0;
    let idx = 0;
    for (let i = 0; i < indexes.length; i++) {
        tree[i].depth = depth;

        if (indexes[i][0] !== -1) {
            idx++;
            nextDepthCounter++;
            tree[i].leftChild = tree[idx];
            tree[i].leftChild.data = indexes[i][0];
        }
        if (indexes[i][1] !== -1) {
            idx++;
            nextDepthCounter++;
            tree[i].rightChild = tree[idx];
            tree[i].rightChild.data = indexes[i][1];
        }

        depthCounter--;
        if (depthCounter === 0) {
            depth++;
            depthCounter = nextDepthCounter;
            nextDepthCounter = 0;
        }
    }
    return tree;
}

function swapNodes(indexes, queries) {
    let tree = makeTree(indexes);
    let results = [];

    for (let query of queries) {
        for (let node of tree) {
            if (node.depth % query === 0) {
                node.swap();
            }
        }
        results.push(tree[0].inOrderTraversal());
    }
    return results;
}

// Example
let indexes = [[2, 3],
[4, -1],
[5, -1],
[6, -1],
[7, 8],
[-1, 9],
[-1, -1],
[10, 11],
[-1, -1],
[-1, -1],
[-1, -1]];
let queries = [2,4];
console.log(swapNodes(indexes, queries));