// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    let lettersearched = "a";
    let stringLength = s.length;
    let nCompleteStrings = Math.floor(n / stringLength);
    let rest = s.substring(0, n % stringLength)
    let nA = (s.split(lettersearched).length - 1) * nCompleteStrings;
    nA += rest.split(lettersearched).length - 1;
    return nA;
}

// Example
let s = "aba";
let n = 10;
console.log(repeatedString(s, n))