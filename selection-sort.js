const testingList = [15, 5, 12, 9, 13, 1, 14, 2, 11, 6, 4, 3, 8, 10, 7];

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  const length = arr.length;
  const sortedArr = [];

  for (let i = 0; i < length; i++) {
    const smallest = findSmallest(arr);

    sortedArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return sortedArr;
}

console.log(selectionSort(testingList))
