// https://www.hackerrank.com/challenges/count-triplets-1/problem

function countTriplets(arr, r) {
    let count = 0;
    let order1 = new Map();
    let order2 = new Map();

    for (let n of arr.reverse()) {

        // Ajout le compte du nombre de rang supérieur de order2
        if (order2.has(n * r)) {
            count += order2.get(n * r);
        }

        // Ajout à order2 si order1 du rang supérieur existe
        if (order1.has(n * r)) {
            if (order2.has(n)) {
                order2.set(n, order2.get(n) + order1.get(n * r));
            } else {
                order2.set(n, order1.get(n * r));
            }

        }

        // Ajout à order1
        if (order1.has(n)) {
            order1.set(n, order1.get(n) + 1);
        } else {
            order1.set(n, 1);
        }
    }

    return count;
}

// Example
let arr = [1, 3, 9, 9, 27, 81];
let r = 3;
console.log(countTriplets(arr, r))