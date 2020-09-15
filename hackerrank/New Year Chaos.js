// https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes(q) {
    let maxBribes = 2;
    let nBribes = 0;

    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > maxBribes) { // Shift too high between a person and its expected position
            console.log("Too chaotic");
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[i] < q[j]) {
                nBribes++;
            }
        }
    }
    console.log(nBribes);
    return;
}

// Example
let q = [2, 5, 1, 3, 4];
minimumBribes(q);