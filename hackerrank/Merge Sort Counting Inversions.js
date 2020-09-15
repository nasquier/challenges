// https://www.hackerrank.com/challenges/ctci-merge-sort/problem

function countInversions(arr) {
    let result = mergeSort(arr);
    return result.count;
}

function mergeSortedArrays(arr0, arr1) {
    let count = 0;
    let sortedArray = [];
    while (arr0.length > 0 && arr1.length > 0) {
        if (arr1[0] < arr0[0]) {
            sortedArray.push(arr1[0]);
            arr1.shift();
            count += arr0.length;
        } else {
            sortedArray.push(arr0[0]);
            arr0.shift();
        }
    }
    if (arr0.length === 0) {
        sortedArray = sortedArray.concat(arr1);
    } else {
        sortedArray = sortedArray.concat(arr0);
    }

    let result = new Object();
    result.sortedArray = sortedArray;
    result.count = count;
    return result;
}

function mergeSort(arr) {
    let n = arr.length;
    let sortedArray, count;
    if (n > 2) {
        let resultLeft = mergeSort(arr.slice(0, Math.ceil(n / 2)));
        let resultRight = mergeSort(arr.slice(Math.ceil(n / 2)));
        let resultMerge = mergeSortedArrays(resultLeft.sortedArray, resultRight.sortedArray);

        sortedArray = resultMerge.sortedArray;
        count = resultLeft.count + resultRight.count + resultMerge.count;

    } else if (n === 2 && arr[1] < arr[0]) {
        sortedArray = arr.reverse();
        count = 1;
    } else {
        sortedArray = arr;
        count = 0;
    }

    let result = new Object();
    result.sortedArray = sortedArray;
    result.count = count;
    return result;
}

// Example
let arr = [2, 1, 3, 1, 2];
console.log(countInversions(arr));