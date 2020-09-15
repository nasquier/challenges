// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
    let letter2Delete = s[0];
    let count = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === letter2Delete) {
            count++;
        } else {
            letter2Delete = s[i];
        }
    }
    return count;
}

// Example
let s = "AAABBB"
console.log(alternatingCharacters(s));