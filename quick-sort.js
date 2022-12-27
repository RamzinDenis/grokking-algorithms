const list = [1, 10, 5, 1, 4];

function quickSort(array) {
  if (array.length < 2) return array;

  const mid = array[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < mid) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(less).concat(mid).concat(quickSort(greater));
}

console.log(quickSort(list));
