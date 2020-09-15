// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
    arr = arr.sort((a, b) => a - b);
    let mini = Math.abs(arr[1] - arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let absDiff = Math.abs(arr[i] - arr[i - 1]);
        if (absDiff < mini) {
            mini = absDiff;
        }
    }
    return mini;
}

// Example
let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
console.log(minimumAbsoluteDifference(arr))