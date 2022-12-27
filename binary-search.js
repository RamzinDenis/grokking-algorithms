const testingNumbers = [1, 3, 5, 7, 9, 11];

function binarySearch(arr, searched) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low !== high) {
    if (arr[mid] === searched) return mid;

    if (searched < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    mid = Math.floor((low + high) / 2);
  }

  return arr[mid] === searched ? mid : -1;
}

console.log(binarySearch(testingNumbers, 11));
