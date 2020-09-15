// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

function countSwaps(a) {
    let nSwaps = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                nSwaps++;
            }
        }
    }
    console.log("Array is sorted in " + nSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}

// Example
let a = [3, 2, 1];
countSwaps(a);