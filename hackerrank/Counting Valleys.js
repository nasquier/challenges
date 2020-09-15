// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(s) {
    let stepsFromSeaLevel = 0;
    let nValley = 0;
    let inValley = false;
    for (let step of s) {
        if (step == "U") {
            stepsFromSeaLevel++;
        } else if (step == "D") {
            stepsFromSeaLevel--;
        }
        if (inValley && stepsFromSeaLevel === 0) {
            nValley++;
            inValley = false;
        } else if (!inValley && stepsFromSeaLevel === -1) {
            inValley = true;
        }
    }
    return nValley;
}

// Example
let s = "UDDDUDUU";
console.log(countingValleys(s));