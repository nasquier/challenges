// https://www.hackerrank.com/challenges/frequency-queries/problem

function freqQuery(queries) {
    let dataSet = new Map();
    let freqSet = new Map();
    let checkOccurences = [];
    for (let query of queries) {
        let n = query[1];
        let freq = dataSet.get(n) || 0;
        switch (query[0]) {
            case 1:
                dataSet.set(n, dataSet.get(n) + 1 || 1);
                freqSet.set(freq, freqSet.get(freq) - 1);
                freqSet.set(freq + 1, freqSet.get(freq + 1) + 1 || 1);
                break;
            case 2:
                dataSet.set(n, Math.max(dataSet.get(n) - 1, 0) || 0);
                freqSet.set(freq, freqSet.get(freq) - 1);
                freqSet.set(freq - 1, freqSet.get(freq - 1) + 1);
                break;
            case 3:
                if (freqSet.get(n) > 0) {
                    checkOccurences.push(1);
                } else {
                    checkOccurences.push(0);
                }
                break;
        }
    }
    return checkOccurences;
}

// Example
let queries = [[1, 3],
[2, 3],
[3, 2],
[1, 4],
[1, 5],
[1, 5],
[1, 4],
[3, 2],
[2, 4],
[3, 2],];
console.log(freqQuery(queries));