// https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
    let n = contests.length;
    let weightLost = new Array(k).fill(0);
    let weightWin = 0;
    let luck = 0;
    for (let i = 0; i < n; i++) {
        if (contests[i][1] === 0) {
            luck += contests[i][0];
        } else {
            if ((contests[i][0] > Math.min(...weightLost)) && (k !== 0)) {
                let index = weightLost.indexOf(Math.min(...weightLost));
                weightWin += weightLost[index];
                weightLost[index] = contests[i][0];
            } else {
                weightWin += contests[i][0];
            }
        }

    }
    if (k === 0) {
        luck -= weightWin;
    } else {
        luck += weightLost.reduce((a, b) => a + b) - weightWin;
    }
    return luck;
}

// Example
let k = 3;
let contests = [[5, 1],
[2, 1],
[1, 1],
[8, 1],
[10, 0],
[5, 0]];
console.log(luckBalance(k,contests))