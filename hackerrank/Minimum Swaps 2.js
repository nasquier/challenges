// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

function minimumSwaps(arr) {
    let nSwaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            arr[arr.lastIndexOf(i + 1)] = arr[i];
            nSwaps++;
        }
    }
    return nSwaps;
}

// Example
let arr = [1, 3, 5, 2, 4, 6, 7];
console.log(minimumSwaps(arr));