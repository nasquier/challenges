// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let currentCloud = 0;
    let nJumps = 0;
    while (currentCloud < c.length - 1) {
        if (!c[currentCloud + 2]) {
            currentCloud = currentCloud + 2;
        } else if (!c[currentCloud + 1]) {
            currentCloud = currentCloud + 1;
        }
        nJumps++;
    }
    return nJumps;
}

// Example
let c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c))