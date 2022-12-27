const testingList = [15, 5, 12, 9, 13, 1, 14, 2, 11, 6, 4, 3, 8, 10, 7];

function findSmallestIndex(arr) {
  let smNumIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[smNumIndex]) {
      smNumIndex = i;
    }
  }

  return smNumIndex;
}

function selectionSort(arr) {
  const sortedArr = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const smallestIndex = findSmallestIndex(arr);
    sortedArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }

  return sortedArr;
}

console.log(selectionSort(testingList));
