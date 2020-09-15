// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
    let substrings = new Map();
    let anaCount = 0;

    for (let subLength = 1; subLength < s.length; subLength++) {
        for (let i_start = 0; i_start <= s.length - subLength; i_start++) {
            let subs = s.substring(i_start, i_start + subLength).split('').sort().join('');
            if (substrings.has(subs)) {
                substrings.set(subs, substrings.get(subs) + 1);
            } else {
                substrings.set(subs, 1);
            }
        }

    }

    for (let occurences of substrings.values()) {
        anaCount += occurences * (occurences - 1) / 2;
    }
    return anaCount;
}

// Example
let s = "ifailuhkqq";
console.log(sherlockAndAnagrams(s))