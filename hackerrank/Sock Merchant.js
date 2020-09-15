// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(ar) {
    let n = ar.length;
    let matchingPair = 0;
    let colorProcessed = [];
    for (let i_color = 0; i_color < n; i_color++) {
        if (!colorProcessed.includes(ar[i_color])) {
            colorProcessed.push(ar[i_color]);
            let nSock = 1;
            for (let j_color = i_color + 1; j_color < n; j_color++) {
                if (ar[i_color] === ar[j_color]) {
                    nSock++;
                }
            }
            matchingPair += Math.floor(nSock / 2);
        }
    }
    return matchingPair;
}

// Example
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(ar))