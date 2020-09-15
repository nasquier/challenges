// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function checkMagazine(magazine, note) {
    for (let word of note) {
        let i = magazine.indexOf(word);
        if (i === -1) {
            console.log("No");
            return;
        } else {
            magazine.splice(i, 1)
        }
    }
    console.log("Yes");
}

// Example
let magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
let note = ["ive", "got", "some", "coconuts"];
checkMagazine(magazine, note);