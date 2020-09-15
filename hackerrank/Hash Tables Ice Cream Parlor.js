// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem

function whatFlavors(cost, money) {
    const map = new Map();
    for (let i = 0; i < cost.length; i++) {
        let target = money - cost[i];
        if (map.has(target)) {
            console.log(map.get(target), i + 1);
            break;
        }
        map.set(cost[i], i + 1);
    }
}

// Example
let cost = [1, 4, 5, 3, 2];
let money = 4;
whatFlavors(cost, money)