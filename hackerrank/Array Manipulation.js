// https://www.hackerrank.com/challenges/crush/problem

function arrayManipulation(n, queries) {
    let arr = Array(n).fill(0);
    let somme = 0;
    let maxi = 0;

    for (let query of queries) {
        let [a, b, k] = query;
        arr[a - 1] += k;
        if (b < n) { arr[b] -= k; }
    }

    for (let el of arr) {
        somme += el;
        if (somme > maxi) { maxi = somme; }
    }
    return maxi
}

// Example
let n = 5;
let queries = [[1, 2, 100],
[2, 5, 100],
[3, 4, 100]];
console.log(arrayManipulation(n, queries));