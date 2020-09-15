// https://www.hackerrank.com/challenges/special-palindrome-again/problem

function substrCount(n, s) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let j = 0;
        let firstLetter = s[i];
        while (s[i + j] === firstLetter) {
            count++;
            j++;
        }
        if (s.slice(i, i + j) === s.slice(i + j + 1, i + 2 * j + 1)) {
            count++;
        }
    }
    return count;
}

// Example
let n = 7;
let s = "abcbaba";
console.log(substrCount(n,s))