// https://www.hackerrank.com/challenges/greedy-florist/problem

function getMinimumCost(k, c) {
    c = c.sort((a, b) => a - b);
    let nFlowers = c.length;
    let flowerPerPerson = Math.floor(nFlowers / k);
    let rest = nFlowers % k;
    let price = 0;

    let i = 0;
    while (i !== flowerPerPerson) {
        i++;
        let index = nFlowers - i * k;
        price += c.slice(index, index + k).reduce((a, b) => a + b * i, 0);

    }
    i++;
    price += c.slice(0, rest).reduce((a, b) => a + b * i, 0);

    return price;
}

// Example
let c = [1, 3, 5, 7, 9];
let k = 3;
console.log(getMinimumCost(k, c))