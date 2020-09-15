// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
    let mapLetters = new Map();
    let mapFrequencies = new Map();
    // First we count how many times each letters appears
    for (let letter of s) {
        if (mapLetters.has(letter)) {
            mapLetters.set(letter, mapLetters.get(letter) + 1);
        } else {
            mapLetters.set(letter, 1);
        }
    }
    // Then, we count the different number of frequencies 
    for (let frequency of mapLetters.values()) {
        if (mapFrequencies.has(frequency)) {
            mapFrequencies.set(frequency, mapFrequencies.get(frequency) + 1);
        } else {
            mapFrequencies.set(frequency, 1);
        }
    }
    let rep = "NO";
    switch (mapFrequencies.size) { // Number of distinct frequencies
        case 1:
            rep = "YES";
            break;
        case 2:
            /*
            There can be only one letter whose frequency is different than the other for the string to be valid. There is two cases for which the string is valid when there are 2 distinct frequencies:
            (1) The letter which doesn't have the same frequency occurs in the string a single time more than the others 
            OR
            (2) It only occurs once
            */
            let frequencies = Array.from(mapFrequencies.keys()); // Frequencies 
            let nLetter = Array.from(mapFrequencies.values()); // Number of letters concerned for each frequency
            // Test if there is a unique letter with a different frequency
            if (nLetter.includes(1)) {
                let indexFreq = nLetter.indexOf(1);
                // These are the condition for the two cases stated above
                if ((frequencies[indexFreq] === frequencies[Math.abs(indexFreq - 1)] + 1)
                    || (frequencies[indexFreq] === 1)) {
                    rep = "YES";
                }
            }
            break;
    }
    return rep;
}

// Example
let s = "aabbccddeefghi";
console.log(isValid(s));