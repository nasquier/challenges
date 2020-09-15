// https://www.hackerrank.com/challenges/mark-and-toys/problem

function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    let cost = 0;
    let i = 0;
    while (cost + prices[i] < k && i < prices.length) {
        cost += prices[i];
        i++;
    }
    return i;
}

// Example
let prices = [1, 12, 5, 111, 200, 1000, 10];
let k = 50;
console.log(maximumToys(prices, k));