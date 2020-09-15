// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
    return [...a.slice(d % a.length), ...a.slice(0, d % a.length)];
}

// Example
let a = [1, 2, 3, 4, 5];
let d = 4;
console.log(rotLeft(a, d))
