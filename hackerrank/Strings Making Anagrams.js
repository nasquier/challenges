// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

function makeAnagram(a, b) {
    let count = 0;
    let longestStr, shortestStr;

    if (a.length > b.length) {
        [longestStr, shortestStr] = [a, b];
    }
    else {
        [longestStr, shortestStr] = [b, a];
    }

    for (let letter of longestStr) {
        if (shortestStr.includes(letter)) {
            shortestStr = shortestStr.replace(letter, "");
        } else {
            count++;
        }
    }
    count += shortestStr.length;
    return count
}

// Example
let a = "cde";
let b = "abc";
console.log(makeAnagram(a, b));