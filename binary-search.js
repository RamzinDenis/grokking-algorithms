const testingNumbers = [
  1,
  3,
  5,
  7,
  9,
  11,
  13,
  15,
  17,
  19,
  21,
  23,
  25,
  27,
  29,
  31,
  33,
  35,
  37,
  39,
  41,
  43,
  45,
  47,
  49,
  51,
];

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let mid = Math.floor((high + low) / 2);

  while (list[mid] !== item && low < high) {
    if (item < list[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    mid = Math.floor((high + low) / 2);
    console.log(low, mid, high);
  }

  return list[mid] === item ? mid : -1;
}

binarySearch(testingNumbers, 23);
