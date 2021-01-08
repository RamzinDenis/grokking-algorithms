// function sum(arr) {
//   if (!arr.length) return 0;

//   return arr[0] + sum(arr.slice(1));
// }

// const testingArr = [1, 2, 3, 4];

// console.log(sum(testingArr));

// function factorial(n) {
//   if (n === 1) return n;

//   return n * factorial(n - 1);
// }

/* То есть у нас функция суммы должна быть следующая return arr[0] + sum(arr.slice()) */

// Найти самый большой элемент

const list = [1, 6, 10, 13, 3];

function findBiggest(list) {
  if (!list.length) return 0;
  const biggest = findBiggest(list.slice(1));

  return list[0] > biggest ? list[0] : biggest;
}

console.log(findBiggest(list))