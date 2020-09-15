// https://www.hackerrank.com/challenges/reverse-shuffle-merge/problem

// Add occurence in a counter map
function addOccurence(map, c) {
    if (map.has(c)) {
        map.set(c, map.get(c) + 1)
    } else {
        map.set(c, 1);
    }
}

// Substract occurence in a counter map
function subOccurence(map, c) {
    map.set(c, map.get(c) - 1)
}

function reverseShuffleMerge(s) {
    s = s.split("");

    // First, we extract the chars we can use to make our original str and their occurences
    let charLeft = new Map();
    for (let c of s) {
        addOccurence(charLeft, c);
    }

    // Then we create a new map with the number of each char in the original str
    let charInString = new Map(charLeft);
    for (let [c, occ] of charInString) {
        charInString.set(c, occ / 2);
    }


    let s0 = [];
    let charUsed = new Map();
    // Along the reverse string we make the original str s0
    for (let c of s.reverse()) {
        /* 
        To know if the letter is to be added in s0 we test if:
        it is already in it
        its occurence have reached its limit
        */
        if (!charUsed.has(c) || charUsed.get(c) < charInString.get(c)) {
            /* 
            Then we remove each char at the end of s0 which are greater than the char tested and if it possible.
            That is to say, we have to keep track of how many times we will find the letter in the rest of s.
            */
            let lastChar = s0[s0.length - 1];
            while (s0 !== [] &&
                charLeft.get(lastChar) > charInString.get(lastChar) - charUsed.get(lastChar) &&
                lastChar > c) {
                subOccurence(charUsed, lastChar);
                s0.pop();
                lastChar = s0[s0.length - 1];
            }
            // Once the last chars have been removed as much as possible, we add the currently tested char at the end of s0 
            addOccurence(charUsed, c);
            s0.push(c);
        }
        subOccurence(charLeft, c);
    }
    return s0.join("");
}

// Example:
let s = "abcdefgabcdefg";
console.log(reverseShuffleMerge(s))