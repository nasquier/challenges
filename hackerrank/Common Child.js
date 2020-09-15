// https://www.hackerrank.com/challenges/common-child/problem

function commonChild(s1, s2) {
    let lcs = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill(0));
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                lcs[i + 1][j + 1] = lcs[i][j] + 1;
            } else {
                lcs[i + 1][j + 1] = Math.max(lcs[i][j + 1], lcs[i + 1][j]);
            }
        }
    }
    return Math.max(...lcs.map(x => Math.max(...x)));
}

// Example
let s1 = "SHINCHAN";
let s2 = "NOHARAAA";
console.log(commonChild(s1, s2))