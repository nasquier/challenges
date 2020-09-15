// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
    for (let letter of s1){
        if (s2.includes(letter)){
            return "YES"
        }
    }
    return "NO"
}

// Example
let s1 = "hello";
let s2 = "world";
console.log(twoStrings(s1,s2));