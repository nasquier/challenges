// https://www.hackerrank.com/challenges/angry-children/problem

function maxMin(k, arr) {
  arr = arr.sort((a, b) => a - b);
  let mini = arr[k - 1] - arr[0];
  for (let i = 1; i < arr.length - k + 1; i++) {
    if (arr[i + k - 1] - arr[i] < mini) {
      mini = arr[i + k - 1] - arr[i];
    }
  }
  return mini;
}

//   Example
let k = 3;
let arr = [10, 100, 300, 200, 1000, 20, 30];
console.log(maxMin(k, arr))